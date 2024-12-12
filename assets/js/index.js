import { Application } from '@hotwired/stimulus'
import ScrollAnimateController from './controllers/scroll_animate_controller'
import ParallaxController from './controllers/parallax_controller'
import MarqueeController from './controllers/marquee_controller'
import BackToTopController from "./controllers/back_to_top_controller"

window.Stimulus = Application.start()
Stimulus.register('scroll-animate', ScrollAnimateController)
Stimulus.register('parallax', ParallaxController)
Stimulus.register('marquee', MarqueeController)
Stimulus.register("back-to-top", BackToTopController)

