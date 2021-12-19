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
    'circle-strategy': defineAsyncComponent(() => import("@/assets/icons/circle-strategy.svg")),
    'circle-innovation': defineAsyncComponent(() => import("@/assets/icons/circle-innovation.svg")),
    'circle-funding': defineAsyncComponent(() => import("@/assets/icons/circle-funding.svg")),
    'circle-research': defineAsyncComponent(() => import("@/assets/icons/circle-research.svg")),
    'circle-implementation': defineAsyncComponent(() => import("@/assets/icons/circle-implementation.svg")),
    'circle-digital': defineAsyncComponent(() => import("@/assets/icons/circle-digital.svg")),
    'circle-sustainability': defineAsyncComponent(() => import("@/assets/icons/circle-sustainability.svg")),
    'circle-government': defineAsyncComponent(() => import("@/assets/icons/circle-government.svg")),
    'circle-startup': defineAsyncComponent(() => import("@/assets/icons/circle-startup.svg")),
    'circle-users': defineAsyncComponent(() => import("@/assets/icons/circle-users.svg")),
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
