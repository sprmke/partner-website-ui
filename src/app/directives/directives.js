export default {
  install(Vue, options) {
    // v-focus
    Vue.directive('focus', {
      inserted: function (el) {
        el.focus()
      }
    });
  }
}
