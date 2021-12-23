<template>
  <div v-if="!isMobile" class="flip-card tw-group tw-h-full tw-w-full">
    <div class="flip-card-inner">
      <div class="flip-card-front group-hover:tw-hidden group-hover:tw-z-0 tw-transition-all tw-relative">
        <slot name="front" />
      </div>
      <div class="flip-card-back tw-hidden group-hover:tw-block group-hover:tw-z-30 tw-relative tw-transition-all">
        <slot name="back" />
      </div>
    </div>
  </div>
  <div v-else class="tw-relative">
    <slot :name="isOpen ? 'back' : 'front'" />
    <button
      class="tw-absolute tw-text-[#FDFDFD] tw-bottom-8 tw-right-7 tw-z-30 tw-transition-all"
      @click="isOpen = !isOpen"
    >
      <CirclePlus
        class="tw-transition-all"
        :class="{
          'tw-w-12  tw-rotate-45': isOpen,
          'tw-w-14': !isOpen,
        }"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue';


export default defineComponent({
  name: "CardFlip",
  components: {
    CirclePlus: defineAsyncComponent(() => import('@/assets/icons/circle-plus.svg'))
  },
  props: {
    isMobile: { type: Boolean, default: false, },
  },
  setup() {
    const isOpen = ref(false)

    return {
      isOpen
    }
  },
});
</script>



<style lang="scss" scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  @apply tw-w-full tw-h-full;
  background-color: transparent;
  // border: 1px solid #f1f1f1;
  // perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  @apply tw-relative tw-w-full tw-h-full tw-text-center;
  transition: 0.8s;
  // transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
// .flip-card:hover .flip-card-inner {
// transform: rotateY(180deg);
// }

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  @apply tw-w-full tw-h-full;
  transition: 0.4s;
  // -webkit-backface-visibility: hidden; /* Safari */
  // backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
// .flip-card-front {
// background-color: #bbb;
// color: black;
// }

/* Style the back side */
// .flip-card-back {
// background-color: dodgerblue;
// color: white;
// transform: rotateY(180deg);
// }
</style>