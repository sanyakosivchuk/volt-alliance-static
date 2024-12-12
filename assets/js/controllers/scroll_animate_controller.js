import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "animated" ]

  initialize() {
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    })
  }

  connect() {
    this.animatedTargets.forEach(element => {
      element.classList.add("opacity-0", "translate-y-5")
      this.observer.observe(element)
    })
  }

  disconnect() {
    this.observer.disconnect()
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-5")
        entry.target.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-700", "ease-out")
        this.observer.unobserve(entry.target)
      }
    })
  }
}
