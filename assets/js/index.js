import { Application } from '@hotwired/stimulus'

window.Stimulus = Application.start()

Stimulus.register('scroll-animate', ScrollAnimateController)
