<template>
  <label class="tw-form-label tw-w-full tw-inline-block tw-text-gray-2 tw-relative" :for="uid">
    <input
      :id="uid"
      class="tw-form-control tw-block tw-w-full tw-rounded-2xl tw-px-6 tw-py-4 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-3 tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
      type="input"
      :placeholder="placeholderLocalized"
      :value="modelValue"
      @input="setModel"
    />
    <div v-if="$slots.append" class="tw-absolute tw-right-2 tw-top-1/2 tw--translate-y-1/2">
      <slot name="append" />
    </div>
  </label>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, getCurrentInstance
  // PropType,
  // computed,
  // ref,
  // toRef,
  // Ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'VInput',
  props: {
    modelValue: { type: null, default: undefined },
    placeholder: { type: null, default: undefined },
    required: { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { t, te } = useI18n({ useScope: 'global' });

    const uid = `${getCurrentInstance()?.uid}`

    // @ts-ignore
    const setModel = ($event) => {
      emit('update:modelValue', $event.target.value)
    }
    const placeholderLocalized = computed(() => {
      const pathPref = 'placeholder.'

      const postfix = props.required ? '*' : ''

      const { placeholder } = props
      const path = `${pathPref}${placeholder?.toLowerCase()}`
      if (te(path)) return t(path).replace(pathPref, '') + postfix
      return placeholder + postfix
      // $t('placeholder.company name')
    })

    return {
      uid,
      setModel,
      placeholderLocalized
    }
  },


})
</script>
