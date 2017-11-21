// stub things not available in DOM

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}
