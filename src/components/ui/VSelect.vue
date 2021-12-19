<template>
  <select
    class="tw-form-select tw-appearance-none tw-block tw-w-full tw-rounded-2xl tw-px-6 tw-py-4 tw-text-base tw-font-normal tw-text-gray-2 tw-bg-white tw-bg-clip-padding tw-bg-no-repeat tw-border tw-border-solid tw-border-gray-3 tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 tw-focus:bg-white focus:tw-border-blue-600 focus:tw-outline-none"
    :aria-label="placeholder"
    :placeholder="placeholder"
    v-bind="$attrs"
    v-on="$attrs"
  >
    <option value disabled selected>{{ placeholder }}</option>
    <option
      v-for="item of items"
      :key="String(item)"
      :value="item"
      :selected="modelValue === item"
    >{{ item }}</option>
  </select>
</template>

<script lang="ts">

import {
  defineComponent,
  // PropType,
  // computed,
  // ref,
  // toRef,
  // Ref,
} from 'vue'


export default defineComponent({
  name: 'VSelect',
  props: {
    modelValue: { type: null, default: undefined },
    items: { type: Array, default: () => [] },
    placeholder: { type: null, default: undefined },
  },
})
</script>
