import {directive} from 'vue-clickaway'
/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install (Vue: { directive: (arg0: string, arg1: any) => void; }) {
    Vue.directive('click-outside', directive)
  }
}

export default GlobalDirectives
