export const vClickOutside = {
  // @ts-ignore
  beforeMount(el, binding /*, vnode */) {
    el.clickOutsideEvent = function (event: KeyboardEvent) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
// @ts-ignore
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
