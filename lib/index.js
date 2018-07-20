import Component from "./component"
import "./index.css"
const comment = {
  install: function(Vue) {
    Vue.component(Component.name, Component)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment)
}
export default comment
