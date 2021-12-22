// // USE INSTEAD :
// import { breakpointsTailwind, useBreakpoints } from '.'
// const breakpoints = useBreakpoints(breakpointsTailwind)
// const sm = breakpoints.smaller('sm')
// const md = breakpoints.between('sm', 'md')
// const lg = breakpoints.between('md', 'lg')
// const xl = breakpoints.between('lg', 'xl')
// const xxl = breakpoints.between('xl', '2xl')

/* old :*/
// import {
//   Ref,
//   ref,
//   onMounted,
//   onUnmounted,
//   // reactive,
//   toRefs,
//   computed,
//   ComputedRef,
// } from 'vue';

// type TScreen = ComputedRef<'sm' | 'md' | 'lg' | 'xl' | '2xl'>;

// interface IWindowSize {
//   x: Ref<number>;
//   y: Ref<number>;
// }

// const windowSize: IWindowSize = {
//   x: ref(window.innerWidth),
//   y: ref(window.innerHeight),
// };

// let tm: ReturnType<typeof setTimeout>

// const resizeListener = () => {
//   clearTimeout(tm);
//   tm = setTimeout(() => {
//     ({ innerWidth: windowSize.x.value, innerHeight: windowSize.y.value } =
//       window);
//   }, 30);
// };

// const screen: TScreen = computed(() => {
//   const x = windowSize.x.value;
//   if (x < 640) return 'sm';
//   if (x >= 640 && x < 768) return 'md';
//   if (x >= 768 && x < 1024) return 'lg';
//   if (x >= 1024 && x < 1280) return 'xl';
//   return '2xl';
// });

// export function useWindowSize() {
//   onMounted(() => {
//     window.addEventListener('resize', resizeListener);
//   });
//   onUnmounted(() => {
//     window.removeEventListener('resize', resizeListener);
//   });

//   return {
//     windowSize: toRefs(windowSize),
//     screen,
//   };
// }

// export default useWindowSize;
