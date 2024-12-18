import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content", "icon"];

  toggle(event) {
    const button = event.currentTarget;
    const content = button.nextElementSibling;
    const icon = button.querySelector("[data-faq-target='icon']");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    if (icon) {
      icon.classList.toggle("rotate-180");
    }
  }
}
