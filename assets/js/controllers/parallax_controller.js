import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["background"]

  connect() {
    this.handleScroll = this.handleScroll.bind(this)
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  disconnect() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const offset = window.pageYOffset
    this.backgroundTarget.style.transform = `translateY(${offset * 0.5}px)`
  }
}
