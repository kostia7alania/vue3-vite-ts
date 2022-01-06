<template>
  <button
    :class="buttonClass"
    class="tw-font-semibold tw-rounded-full tw-border-2 tw-border-gray-3 tw-h-12 tw-px-3 tw-min-w-fit hover:tw-hue-rotate-180 active:tw-sepia tw-transition tw-ease-in-out tw-duration-1000"
    :style="{
      width,
      height,
    }"
    v-bind="$attrs"
    v-on="$attrs"
  >
    <span v-if="textLocalized" v-html="textLocalized" />
    <slot v-else />
  </button>
</template>

<script lang="ts">
import {
  defineComponent, computed
  // PropType,
  // computed,
  // ref,
  // toRef,
  // Ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

const variantsMap: { [key: string]: string } = {
  'orange-1': 'tw-text-orange-1 tw-border-orange-1 ',
  'orange-2': 'tw-bg-orange-1 tw-text-white tw-border-orange-2',
  'blue': 'tw-text-white tw-bg-blue-1',
}

export default defineComponent({
  name: 'VButton',
  props: {
    variant: {
      type: String,
      default: '',
      // validator: val => ['orange-1'].find(e=> e===val)
    },
    class: { type: [String, Object], default: 'tw-text-sm', },
    text: { type: String, default: '' },
    width: { type: String, default: undefined },
    height: { type: String, default: undefined },
    // to: { type: [String, Object,], default: undefined } // link
  },
  setup(props) {
    const { t, te } = useI18n({ useScope: 'global' });

    const buttonClass = computed(() => {
      const cls = variantsMap[props.variant] || ''
      return cls + ' ' + props.class
    })

    const textLocalized = computed(() => {
      const { text } = props
      const path = `button.${text?.toLowerCase()}`
      if (te(path)) return t(path).replace('button.', '')
      return text
      // $t('button.send')
    })

    // $t('button.our origin')

    return {
      buttonClass, textLocalized
    }
  },


})
</script>
