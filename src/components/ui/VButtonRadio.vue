<template>
  <VButton
    v-for="(item) of items"
    :key="keyValue ? item[keyValue] : item"
    :text="keyLabel ? item[keyLabel] : item"
    :class="getClass(item)"
    :variant="getVariant(item)"
    height="40px"
    v-bind="$attrs"
    v-on="$attrs"
    @click="$emit('update:modelValue', keyValue ? item[keyValue] : item)"
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

type TTheme = 'orange' | 'blue'

export default defineComponent({
  name: 'VButtonRadio',
  components: {
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
  },
  props: {
    modelValue: { type: [Number, String, Object], default: undefined },
    items: { type: Array as any, default: () => [] },
    keyValue: { type: String, default: undefined },
    keyLabel: { type: String, default: undefined },
    theme: { type: String, default: 'orange' },
    activeClass: { type: String, default: '' },
    inactiveClass: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  setup(props) {

    const variant = computed(() => {
      const theme = props.theme as TTheme
      return variansMap?.[theme] || orange.variants
    })

    const getClass = (item: any) => {
      // keyValue
      const { keyValue, modelValue, activeClass, inactiveClass } = props as any
      if (keyValue) return item[keyValue] === modelValue ? activeClass : inactiveClass
      return item === modelValue ? activeClass : inactiveClass
    }
    const getVariant = (item: any) => {
      const { active, inactive } = variant.value
      const { keyValue, modelValue, } = props as any

      if (keyValue) return item[keyValue] === modelValue ? active : inactive
      return item === modelValue ? active : inactive
    }
    return { getClass, getVariant }
  },
})
</script>
