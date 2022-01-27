<template>
  <!-- <VTextarea v-model="form.message" rows="3" placeholder="Your message*" /> -->

  <component
    :is="!md ? 'VInput' : 'VTextarea'"
    rows="6"
    :placeholder="placeholder"
    :model-value="modelValue"
    v-bind="$attrs"
    @update:model-value="setModelValue($event)"
    v-on="$attrs"
  >
    <template v-if="!modelValue" #bottom>
      <div class="tw-text-center tw-relative tw-mb-4 tw-flex tw-justify-center">
        <div class="tw-px-2 tw-bg-white tw-relative tw-z-50">{{ $t('or') }}</div>
        <div class="delimiter-or"></div>
      </div>
      <div class="tw-mx-2 tw-mb-6">
        <VButton
          class="tw-rounded-lg tw-w-full tw-text-base truncate tw-bg-white md:tw-w-[200px]"
          :text="buttonLabel"
          variant="orange-1"
          height="42px"
        />
      </div>
    </template>

    <template v-if="!modelValue" #append>
      <VButton
        class="tw-rounded-lg tw-w-full tw-text-base truncate tw-bg-white md:tw-w-[200px]"
        :text="buttonLabel"
        variant="orange-1"
        height="42px"
      />
    </template>
  </component>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import {
  defineAsyncComponent,
  defineComponent, getCurrentInstance, ref
  // PropType,
  // computed,
  // ref,
  // toRef,
  // Ref,
} from 'vue'

export default defineComponent({
  name: 'VCVPicker',
  components: {
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
    VInput: defineAsyncComponent(() => import("@/components/ui/VInput.vue")),
    VTextarea: defineAsyncComponent(() => import("@/components/ui/VTextarea.vue")),
  },
  props: {
    modelValue: { type: null, default: undefined },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    buttonLabel: { type: String, default: '' },
    accept: { type: null, default: undefined },
  },

  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const formFile = ref(null)

    const uid = `${getCurrentInstance()?.uid}`

    // const changeHandler = (event: Event | null) => {
    //   // @ts-ignore
    //   const file = event?.target?.files?.[0] || undefined
    //   window.e = event?.target

    //   // @ts-ignore
    //   formFile.value.value = ''

    //   emit('update:modelValue', file)
    // }
    // const remove = () => {
    //   changeHandler(null)
    // }
    // @ts-ignore
    const setModelValue = ($event) => {
      emit('update:modelValue', $event)
    }

    const breakpoints = useBreakpoints(breakpointsTailwind)
    const md = breakpoints.smaller('md')


    return {
      uid,
      // changeHandler,
      // remove,
      setModelValue,
      formFile,
      md
    }
  },


})
</script>

<style lang='scss' scoped>
.delimiter-or:before {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: #e8e7ea;
  content: " ";
  top: 50%;
}
</style>