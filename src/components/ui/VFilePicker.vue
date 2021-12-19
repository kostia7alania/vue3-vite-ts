<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-gap-x-10">
    <input
      id="formFile"
      class="form-control tw-hidden tw-w-full tw-px-3 tw-py-1.5 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
      type="file"
      :accept="accept"
      @change="changeHandler"
    />
    <!-- selected file label container -->
    <label
      v-if="modelValue"
      class="truncate tw-form-label tw-flex tw-flex-1 tw-items-center tw-text-center tw-pl-2 tw-h-16 tw-font-semibold tw-rounded-2xl tw-border-2 tw-text-white tw-bg-orange-1 tw-border-orange-1 tw-relative"
    >
      {{ modelValue.name }}
      <span
        class="tw-absolute tw-right-0 tw-z-10 tw-bg-orange-1 tw-pr-6 tw-pl-2 tw-py-1"
      >
        <span class="tw-text-2xl tw-text-white hover:tw-text-black tw-cursor-pointer">
          <button @click="remove">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="tw-fill-current"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.292787 1.29299C0.480314 1.10552 0.734622 1.0002 0.999786 1.0002C1.26495 1.0002 1.51926 1.10552 1.70679 1.29299L5.99979 5.58599L10.2928 1.29299C10.385 1.19748 10.4954 1.1213 10.6174 1.06889C10.7394 1.01648 10.8706 0.988893 11.0034 0.987739C11.1362 0.986585 11.2678 1.01189 11.3907 1.06217C11.5136 1.11245 11.6253 1.1867 11.7192 1.28059C11.8131 1.37449 11.8873 1.48614 11.9376 1.60904C11.9879 1.73193 12.0132 1.86361 12.012 1.99639C12.0109 2.12917 11.9833 2.26039 11.9309 2.38239C11.8785 2.5044 11.8023 2.61474 11.7068 2.70699L7.41379 6.99999L11.7068 11.293C11.8889 11.4816 11.9897 11.7342 11.9875 11.9964C11.9852 12.2586 11.88 12.5094 11.6946 12.6948C11.5092 12.8802 11.2584 12.9854 10.9962 12.9877C10.734 12.9899 10.4814 12.8891 10.2928 12.707L5.99979 8.41399L1.70679 12.707C1.51818 12.8891 1.26558 12.9899 1.00339 12.9877C0.741188 12.9854 0.490376 12.8802 0.304968 12.6948C0.11956 12.5094 0.0143906 12.2586 0.0121121 11.9964C0.00983372 11.7342 0.110629 11.4816 0.292787 11.293L4.58579 6.99999L0.292787 2.70699C0.105316 2.51946 0 2.26515 0 1.99999C0 1.73483 0.105316 1.48052 0.292787 1.29299Z"
              />
            </svg>
          </button>
        </span>
      </span>
    </label>
    <!-- button -->
    <label
      for="formFile"
      class="tw-form-label tw-flex tw-flex-1 tw-items-center tw-justify-center tw-text-center tw-cursor-pointer tw-px-2 tw-h-16 tw-font-semibold tw-rounded-2xl tw-border-2 tw-text-orange-1 tw-border-orange-1"
    >{{ label }}</label>
  </div>
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
  name: 'VFilePicker',
  // components: {
  //   VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
  // },
  props: {
    modelValue: { type: null, default: undefined },
    label: { type: String, default: '' },
    accept: { type: null, default: undefined },
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {

    const uid = `${getCurrentInstance()?.uid}`

    const changeHandler = (event: Event | null) => {
      // @ts-ignore
      const file = event?.target?.files?.[0] || undefined
      emit('update:modelValue', file)
    }
    const remove = () => {
      changeHandler(null)
    }
    return {
      uid,
      changeHandler,
      remove
    }
  },


})
</script>
