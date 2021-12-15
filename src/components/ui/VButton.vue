<template>
  <button :class="buttonClass" :style="{
    width,
    height,
  }" v-bind="$attrs" v-on="$attrs">
    <span v-if="text">{{ text }}</span>
    <slot v-else />
  </button>
</template>

<script lang="ts">

import {
  defineComponent, computed
  // PropType,
  // computed,
  // ref,
  // toRef,
  // Ref,
} from 'vue'

const variantsMap: { [key: string]: string } = {
  'orange-1': `
                tw-text-orange-1
                tw-text-sm
                tw-font-semibold
                tw-rounded-full
                tw-border-2
                tw-border-gray-3 
                tw-h-10 tw-px-4
                hover:tw-rounded-2xl
                active:tw-rounded-xl
                tw-transition
                tw-ease-in-out
                tw-duration-1000
                `,
  'orange-2': `
                tw-bg-orange-1
                tw-text-white
                tw-text-sm
                tw-font-semibold
                tw-rounded-full
                tw-border-2
                tw-border-gray-3 
                tw-h-10 tw-px-4
                hover:tw-rounded-2xl
                active:tw-rounded-xl
                tw-transition
                tw-ease-in-out
                tw-duration-1000
                `,
  'blue': `
                tw-text-white
                tw-bg-blue-1
                tw-font-semibold
                tw-rounded-full
                tw-border-2
                tw-border-gray-3 
                tw-h-12 tw-px-9
                hover:tw-rounded-2xl
                active:tw-rounded-xl
                tw-transition
                tw-ease-in-out
                tw-duration-1000
                `,

}

export default defineComponent({
  name: 'VButton',
  props: {
    variant: {
      type: String,
      default: '',
      // validator: val => ['orange-1'].find(e=> e===val)
    },
    text: { type: String, default: '' },
    width: { type: String, default: undefined },
    height: { type: String, default: undefined },
  },
  setup(props) {
    const buttonClass = computed(() => {
      const cls = variantsMap[props.variant] || ''
      return cls
    })


    return {
      buttonClass,
    }
  },


})
</script>
