import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button"]

  connect() {
    this.handleScroll = this.handleScroll.bind(this)
    window.addEventListener("scroll", this.handleScroll)
    this.handleScroll()
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const scrollThreshold = 300
    if (window.scrollY > scrollThreshold) {
      this.buttonTarget.classList.remove("hidden")
      this.buttonTarget.classList.add("block")
    } else {
      this.buttonTarget.classList.add("hidden")
      this.buttonTarget.classList.remove("block")
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
}
