import Toast from './Toast'

const toast = {
  install (vue) {
    let Vm = vue.extend(Toast)
    let vm = new Vm()
    let el = vm.$mount().$el
    document.body.appendChild(el)

    vue.prototype.$toast = vm
  }
}

export default toast
