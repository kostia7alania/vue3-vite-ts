<template>
  <select
    class="tw-form-select tw-appearance-none tw-block tw-w-full tw-rounded-2xl tw-px-6 tw-py-4 tw-text-base tw-font-normal tw-text-gray-2 tw-bg-white tw-bg-clip-padding tw-bg-no-repeat tw-border tw-border-solid tw-border-gray-3 tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 tw-focus:bg-white focus:tw-border-blue-600 focus:tw-outline-none"
    :aria-label="placeholder"
    :placeholder="placeholder"
    v-bind="$attrs"
    v-on="$attrs"
    @change="changeHandler($event)"
  >
    <option value disabled selected>{{ placeholder }}</option>
    <option
      v-for="item of items"
      :key="keyValue ? item[keyValue] : item"
      :value="keyValue ? item[keyValue] : item"
      :selected="checkIsSelected(item)"
    >{{ keyLabel ? item[keyLabel] : item }}</option>
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
  inheritAttrs: false,
  props: {
    modelValue: { type: [Number, String, Object], default: undefined },
    items: { type: Array as any, default: () => [] },

    keyValue: { type: String, default: undefined },
    keyLabel: { type: String, default: undefined },

    placeholder: { type: null, default: undefined },

  },
  setup(props, { emit }) {
    const changeHandler = (event: Event | null) => {
      // emit('update:model-value', event?.currentTarget?.value)

      const { keyValue } = props
      // @ts-ignore
      // remember that the first option is placeoplder
      const idx = event?.target?.selectedIndex - 1
      const res = props.items[idx]
      const resData = keyValue ? res[keyValue] : res
      emit('update:model-value', resData)
    }

    const checkIsSelected = (item: any) => {

      const { keyValue, modelValue, } = props as any

      if (keyValue) return item[keyValue] === modelValue
      return item === modelValue

    }
    return { changeHandler, checkIsSelected }
  },

})
</script>
