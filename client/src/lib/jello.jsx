import TWEEN from '@tweenjs/tween.js'

//----------------------
export function scrollToPosition(x, y, options = {}) {
  const el = options.el
  const duration = options.duration >= 0 ? options.duration : 1000

  let animate = () => {
    requestAnimationFrame(animate)
    TWEEN.update()
  }
  function updateScroll() {
    if (el) {
      el.scrollLeft = this.x
      el.scrollTop = this.y
    } else {
      window.scrollTo(this.x, this.y)
    }
  }
  new TWEEN.Tween({
    x: el ? el.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft,
    y: el ? el.scrollTop : window.pageYOffset || document.documentElement.scrollTop
  })
    .easing(options.easing || TWEEN.Easing.Quartic.InOut)
    .to({ x: x || 0, y: y || 0 }, duration)
    .onUpdate(updateScroll)
    .onComplete(() => {
      animate = () => {}
      if (typeof options.onComplete === 'function') {
        options.onComplete()
      }
    })
    .start()
  requestAnimationFrame(animate)
}
