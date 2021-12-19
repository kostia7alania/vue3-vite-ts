<template>
  <label
    class="tw-form-check-label tw-inline-block tw-text-black-1 tw-cursor-pointer group-checked:tw-bg-orange-1"
    :class="{
      'tw-font-medium': !modelValue,
      'tw-font-semibold': modelValue
    }"
    :for="uid"
  >
    <!-- @ts-ignore -->
    <input
      :id="uid"
      class="tw-form-check-input tw-appearance-none tw-h-6 tw-w-6 tw-border tw-border-gray-300 tw-rounded-full tw-bg-white checked:tw-bg-orange-1 checked:tw-border-orange-1 focus:tw-outline-none tw-transition tw-duration-200 tw-align-top tw-bg-no-repeat tw-bg-center tw-bg-contain tw-float-left tw-mr-5 tw-cursor-pointer group"
      type="checkbox"
      :value="modelValue"
      :checked="modelValue"
      @change="changeHandler($event)"
    />
    {{ label }}
    <slot />
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
  name: 'VCheckbox',
  props: {
    modelValue: { type: null, default: undefined },
    label: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {

    const uid = `${getCurrentInstance()?.uid}`

    const changeHandler = (event: Event | null) => {
      // @ts-ignore
      emit('update:modelValue', event?.currentTarget?.checked)
    }
    return {
      uid,
      changeHandler
    }
  },


})
</script>
