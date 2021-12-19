<template>
  <label class="tw-form-label tw-w-full tw-inline-block tw-text-gray-2 tw-relative" :for="uid">
    <input
      :id="uid"
      class="tw-form-control tw-block tw-w-full tw-rounded-2xl tw-px-6 tw-py-4 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-3 tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
      type="input"
      :placeholder="placeholder"
      v-bind="$attrs"
      v-on="$attrs"
    />
    <div v-if="$slots.append" class="tw-absolute tw-right-2 tw-top-1/2 tw--translate-y-1/2">
      <slot name="append" />
    </div>
  </label>
</template>

<script lang="ts">

import {
  defineComponent, getCurrentInstance
  // PropType,
  // computed,
  // ref,
  // toRef,
  // Ref,
} from 'vue'


export default defineComponent({
  name: 'VInput',
  props: {
    placeholder: { type: null, default: undefined },
  },
  setup() {
    const uid = `${getCurrentInstance()?.uid}`
    return {
      uid,
    }
  },


})
</script>
