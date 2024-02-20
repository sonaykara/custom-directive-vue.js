import { createApp } from 'vue'

import App from './App.vue'


const Application = createApp(App)

Application.directive("display", {
    mounted(el, binding) {
      switch(binding.value) {
        case 'show': 
          el.style.display = "block";
          break;
        case 'hide':
          el.style.display = "none";
          break;
      }
      
      switch(binding.arg ) {
        case 'flex': 
          el.style.display = "flex";
          break;
        
          case 'grid':
            el.style.display = binding.value
            break;

        case 'inline-block':
            el.style.display = "inline-block"
            break;
        
        case 'inline' :
            el.style.display = "inline"    
      }
    }
  });
Application.mount('#app')
