<template>
  <component :is="icon" />
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
  name: 'VIcon',
  components: {
    branches: defineAsyncComponent(() => import("@/assets/icons/branches.svg")),
    consultations: defineAsyncComponent(() => import("@/assets/icons/consultations.svg")),
    offices: defineAsyncComponent(() => import("@/assets/icons/offices.svg")),
    softGroup: defineAsyncComponent(() => import("@/assets/icons/soft-group.svg")),
    'circle-strategy-orange': defineAsyncComponent(() => import("@/assets/icons/circle-strategy-orange.svg")),
    'circle-innovation': defineAsyncComponent(() => import("@/assets/icons/circle-innovation.svg")),
    'circle-funding': defineAsyncComponent(() => import("@/assets/icons/circle-funding.svg")),
    'circle-research-orange': defineAsyncComponent(() => import("@/assets/icons/circle-research-orange.svg")),
    'circle-implementation': defineAsyncComponent(() => import("@/assets/icons/circle-implementation.svg")),
    'circle-digital-orange': defineAsyncComponent(() => import("@/assets/icons/circle-digital-orange.svg")),
    'circle-sustainability': defineAsyncComponent(() => import("@/assets/icons/circle-sustainability.svg")),
  },
  props: {
    icon: {
      type: String,
      default: '',
      // validator: val => ['orange-1'].find(e=> e===val)
    },
    text: { type: String, default: 'branches' }
  },


})
</script>
