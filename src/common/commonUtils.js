export function debounce (func, time, immediate) {
  let timer = null;
  if (immediate) {
    return function (...args) {
      if (!timer) {
        func.apply(this,args);
      }
      else{
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        timer = null
      },time)
    }
  }
  else{
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this,args)
      },time)
    }
  }
}
