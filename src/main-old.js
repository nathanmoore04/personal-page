import './assets/main.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.




//
// Place any custom JS here
//

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })