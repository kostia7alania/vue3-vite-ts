<template>
  <VButton
    v-for="(item) of items"
    :key="String(item)"
    :text="String(item)"
    :variant="item === modelValue ? 'orange-2' : 'orange-1'"
    v-bind="$attrs"
    v-on="$attrs"
    @click="$emit('update:modelValue', item)"
  />
</template>

<script lang="ts">

import {
  defineComponent,
  defineAsyncComponent
  // PropType,
  // computed,
  // ref,
  // toRef,
  // Ref,
} from 'vue'

export default defineComponent({
  name: 'VButtonRadio',
  components: {
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
  },
  props: {
    modelValue: { type: [Number, String], default: undefined },
    items: { type: Array, default: () => [] },
  },
  emits: ['update:modelValue'],
})
</script>
