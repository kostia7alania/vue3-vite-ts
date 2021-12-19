<template>
  <VButton
    v-for="(item) of items"
    :key="String(item)"
    :text="String(item)"
    :class="item === modelValue ? activeClass : inactiveClass"
    :variant="item === modelValue ? variant.active : variant.inactive"
    height="40px"
    v-bind="$attrs"
    v-on="$attrs"
    @click="$emit('update:modelValue', item)"
  />
</template>

<script lang="ts">

import {
  defineComponent,
  defineAsyncComponent,
  computed
  // PropType,
  // computed,
  // ref,
  // toRef,
  // Ref,
} from 'vue'

const orange = {
  variants: {
    inactive: 'orange-1',
    active: 'orange-2',
  },
  class: {
    inactive: 'orange-1',
    active: 'orange-2',
  }
}

const variansMap = {
  'orange': orange.variants,
  'blue': {
    inactive: 'tw-bg-white',
    active: 'tw-bg-white',
  },
}

export default defineComponent({
  name: 'VButtonRadio',
  components: {
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
  },
  props: {
    modelValue: { type: [Number, String], default: undefined },
    items: { type: Array, default: () => [] },
    theme: { type: String, default: 'orange' },
    activeClass: { type: String, default: '' },
    inactiveClass: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  setup(props) {

    const variant = computed(() => {
      // @ts-ignore
      return variansMap?.[props?.theme] || orange.variants
    })

    return { variant }
  },
})
</script>
