<template>
  <label class="tw-form-label tw-w-full tw-inline-block tw-text-gray-2 tw-relative" :for="uid">
    <textarea
      :id="uid"
      class="tw-form-control tw-block tw-w-full tw-rounded-2xl tw-px-6 tw-py-4 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-3 tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
      :rows="rows"
      :placeholder="placeholder"
      :value="modelValue"
      v-bind="$attrs"
      :class="{
        'tw-border-red-500': showError && required && !modelValue,
      }"
      @input="setModel"
      v-on="$attrs"
    />
    <div v-if="$slots.bottom" class="tw-absolute tw-right-0 tw-left-0 tw-bottom-0">
      <slot name="bottom" />
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
  name: 'VTextarea',
  props: {
    modelValue: { type: null, default: undefined },
    placeholder: { type: null, default: undefined },
    rows: { type: [Number, String], default: 3 },
    required: { type: Boolean, default: false },
    showError: { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const uid = `${getCurrentInstance()?.uid}`
    // @ts-ignore
    const setModel = ($event) => {
      emit('update:modelValue', $event.target.value)
    }
    return {
      setModel,
      uid,
    }
  },


})
</script>
