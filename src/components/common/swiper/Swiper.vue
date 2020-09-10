<template><div id="swiper-container" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="swiperContainer">  <ul id="swiper-img" ref="swiperImg" :style="{'transitionDuration': duration +'s'}">    <slot></slot>  </ul>  <ul id="swiper-index">    <li v-for="(item,index) in itemNumber" v-bind:key="index" @click="choosePic(index)" :class="{'active_dot': currentIndex == index}"></li>  </ul></div></template><script>export default {  name: 'Swiper',  props: {    autoPlay: {      type: Boolean,      default: true    },    interval: {      type: Number,      default: 3000    }  },  data () {    return {      currentIndex: 0,      itemNumber: 0,      touchS: 0,      touchE: 0,      touchMS: 0,      touchME: 0,      duration: 0,
      isMoving: false,      timer: ''    }  },  mounted () {
    setTimeout(() => {
      this.initData();
      this.initStyle();
      this.startAutoPlay();
    },100)  },  methods: {
    refresh () {
      setTimeout(()=>{
        this.$refs.swiperImg.children[0].firstChild.src = this.$refs.swiperImg.children[this.itemNumber].firstChild.src
        this.$refs.swiperImg.children[this.itemNumber + 1].firstChild.src = this.$refs.swiperImg.children[1].firstChild.src
      },100)
    },    initData () {      this.itemNumber = this.$children.length    },    initStyle () {      this.$refs.swiperImg.style.width = this.getPicWidth * (2 + this.itemNumber) + 'px'      let children = this.$refs.swiperImg.children      for (let index = 0;index < children.length;index ++){        children[index].style.width = this.getPicWidth + 'px';      }      this.$refs.swiperImg.insertBefore((this.$refs.swiperImg.children[this.itemNumber - 1]).cloneNode(true),this.$refs.swiperImg.children[0]);      this.$refs.swiperImg.appendChild((this.$refs.swiperImg.children[1]).cloneNode(true));      this.$refs.swiperImg.style.transform = "translateX(-"+this.getPicWidth+"px)";      setTimeout(() => {        this.duration = 0.5;      },100)    },    startAutoPlay () {      if (this.autoPlay) {        this.timer = setInterval (() => {          this.currentIndex ++;          this.handleMove ()        },this.interval)      }    },    handleMove () {      let moveX = (this.currentIndex + 1) * this.getPicWidth;      let spec = false;      if (this.currentIndex === -1) {        spec = true;        this.currentIndex = this.itemNumber - 1;      }      if (this.currentIndex === this.itemNumber) {        spec = true;        this.currentIndex = 0;      }      if (this.currentIndex !== -1 || this.currentIndex === this.itemNumber){        this.duration = 0.5;
				if (this.$refs.swiperImg != undefined){
					this.$refs.swiperImg.style.transform = "translateX(-"+moveX+"px)";
				}      }
      setTimeout(() => {
        this.isMoving = false;
      },500)      if (spec) {        setTimeout(() => {          this.duration = 0;          moveX = (this.currentIndex + 1) * this.getPicWidth;
					if (this.$refs.swiperImg != undefined){
						this.$refs.swiperImg.style.transform = "translateX(-"+moveX+"px)";
					}        },500)      }    },    choosePic (index) {      this.currentIndex = index;      this.handleMove ();    },    touchEnd (event) {
      if(!this.isMoving){
        this.isMoving = true;
        this.touchE = event.changedTouches[0].clientX;
        let moveLen = this.touchS - this.touchE;
        let len = this.getPicWidth * 0.3;
        if(moveLen > len) {
          this.currentIndex ++;
        }else if (moveLen < -len) {
          this.currentIndex --;
        }
        this.handleMove ();
      }

      this.duration = 0.5;      this.startAutoPlay();    },    touchStart (event) {      if (this.timer !== '') clearInterval(this.timer);
      this.duration = 0;
      if(this.isMoving)return false;      this.touchS = event.changedTouches[0].clientX;    },    touchMove (event) {
      if(this.isMoving)return false;      this.touchME = event.changedTouches[0].clientX;      let delta = this.touchS - this.touchME;      let moveX = delta + (this.currentIndex + 1) * this.getPicWidth;      this.$refs.swiperImg.style.transform = "translateX(-" + moveX + "px)";    }  },  computed: {    getPicWidth () {      return this.$refs.swiperContainer.clientWidth    },    getWidth () {      return this.itemNumber * this.getPicWidth    }  },
  created () {
    this.$emit("loaded");
  }}</script><style>#swiper-container {  height: var(--swiper-height,250px);  width: auto;  overflow: hidden;  position: relative;}#swiper-index {  position: absolute;  left: 50%;  transform: translateX(-50%);  bottom: 10px;}#swiper-index li{  width:8px;  height: 8px;  margin: 0px 5px;  border: solid 1px gray;  border-radius: 100%;  background-color: #eee;  display: inline-block;}.swiper-index-current {  background-color: #ff0000;}#swiper-container ul {  margin: 0px;  padding: 0px;  display: block;}.active_dot {  background-color: #FF0000!important;}</style>
