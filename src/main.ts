import './styles.css'

import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
 
Alpine.plugin(persist)

const darkModeStore = {
  on: false, 
  init() {
    this.on = Alpine.$persist(
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ).as('darkMode') as unknown as boolean; // override type
  },
  toggle() {
    this.on = !this.on
  }
}

Alpine.store('darkMode', darkModeStore)

window.Alpine = Alpine

Alpine.start()
