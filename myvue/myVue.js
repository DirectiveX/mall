class Vue{
	constructor(options) {
	    this._data = options.data
			this.$el = options.el
			this.$options = options
			this._proxy()
			//observe data
			new Observer(this._data)
			let el = document.querySelector(this.$el)
			new Compile(this,el)
	}
	
	_proxy () {
		const vue = this
		Object.keys(this._data).forEach(key => {
			Object.defineProperty(vue,key,{
				enumerable: true,
				configurable: true,
				get () {
					return this._data[key]
				},
				set (newKey) {
					this._data[key] = newKey
				}
			})
		})
	}
}

class Observer{
	constructor(data) {
	  Object.keys(data).forEach(key=>this.defineReactive(data,key,data[key]))
	}
		
	defineReactive(obj,key,value){
		const dep = new Dep()
		Object.defineProperty(obj,key,{
			enumerable: true,
			configurable: true,
			get () {
				if(Dep.target){
					dep.pushWatcher(Dep.target)
				}
				return value
			},
			set (newValue) {
				if (value === newValue) return
				value = newValue
				dep.notify()
			}
		})
	}
}

class Dep{
	constructor(arg) {
	  this.subWatchers = []
	}
	
	pushWatcher (watcher) {
		this.subWatchers.push(watcher)
	}
	
	notify () {
		this.subWatchers.forEach(watcher => {
			watcher.update()
		})
	}
}

class Watcher{
	constructor(vm,cache,key,fc) {
		this.vm = vm
		this.key = key
		this.cache = cache
	  this.fc = fc
		
		Dep.target = this
		this.vm[key]
		Dep.target = null
	}
	
	update () {
		this.fc.call(this.vm,this.cache)
	}
}

class Compile {
	constructor(vm, el) {
	  this.vm = vm
		this.el = el
		let frag = this.nodeToFragment()
		this.compileElement(frag)
		this.el.appendChild(frag)
	}
	
	nodeToFragment () {
		let frag = document.createDocumentFragment()
		let nodes = this.el.childNodes;
		[].slice.call(nodes).forEach(node => {
			frag.appendChild(node)
		})
		return frag
	}
	
	compileElement (el) {
		const reg = /\{\{([^{|}]+)\}\}/g;
		[].slice.call(el.childNodes).forEach(node => {
			if ( node instanceof Text && reg.test(node.textContent)){
				let valueReg
				let nod = node.cloneNode()
				let arr = nod.textContent.match(reg)
				for (let regex of arr){
					let value = regex.replace(/[{{}}]/g,'')
					new Watcher(this.vm,nod,value,(cache) => this.updateText (node,cache))
					this.updateText(node, node.cloneNode())
				}
			}else if (!(node instanceof Text)){
				this.dealEvent(node)
				if (node.childNodes && node.childNodes.length != 0){
					this.compileElement(node)
				}
			}
		})
	}
	
	updateText (node, cache) {
		const reg = /\{\{([^{|}]+)\}\}/g;
		let valueReg
		let temp = cache.cloneNode()
		let arr = cache.textContent.match(reg)
		if(arr == null)return
		for (let regex of arr){
			let value = regex.replace(/[{{}}]/g,'')
			temp.textContent = temp.textContent.replace(regex,this.vm[value])
		}
		node.textContent = temp.textContent
	}
	
	dealEvent(node){
		this.vbind (node)
		this.von (node)
		this.vmodel(node)
	}
	
	vbind (node) {
		let reg = new RegExp('v-bind:(\\w+)="([^"]*)"','g')
		let regValue
		while(regValue = reg.exec(node.outerHTML)){
			let field = regValue[1]
			let key = regValue[2]
			node[field] = this.vm[key]
			node.removeAttribute("v-bind:"+field)
			new Watcher(this.vm,node,key,(cache) => node[field] = this.vm[key])
		}
	}
	
	von (node) {
		let reg = new RegExp('v-on:(\\w+)="([^"]*)"','g')
		let regValue
		while(regValue = reg.exec(node.outerHTML)){
			let field = regValue[1]
			let value = regValue[2]
			node.addEventListener(field,() => {eval(value)})
			node.removeAttribute("v-on:"+field)
		}
	}
	
	vmodel (node) {
		let key = node.getAttribute("v-model")
		if(key != null){
			node.addEventListener("input",() => {this.vm[key] = node.value})
			node.removeAttribute("v-model")
			node.value = this.vm[key]
			new Watcher(this.vm,node,key,(cache) => node.value = this.vm[key])
		}
	}
}