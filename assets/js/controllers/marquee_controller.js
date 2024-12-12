import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  connect() {
    this.speed = 100
    this.lastTime = null

    this.fullWidth = this.containerTarget.scrollWidth
    this.halfWidth = this.fullWidth / 2

    this.requestId = requestAnimationFrame(this.animate.bind(this))
  }

  disconnect() {
    cancelAnimationFrame(this.requestId)
  }

  animate(timestamp) {
    if (!this.lastTime) this.lastTime = timestamp
    const delta = timestamp - this.lastTime
    this.lastTime = timestamp

    const moveX = (this.speed * delta) / 1000
    let currentTransform = this.containerTarget.style.transform
    let match = currentTransform.match(/translateX\(([-0-9.]+)px\)/)
    let currentX = match ? parseFloat(match[1]) : 0
    
    currentX -= moveX

    if (currentX <= -this.halfWidth) {
      currentX = 0
    }

    this.containerTarget.style.transform = `translateX(${currentX}px)`

    this.requestId = requestAnimationFrame(this.animate.bind(this))
  }
}
