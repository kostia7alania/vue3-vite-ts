<template>
  <CardFlip :is-mobile="isMobile" class="tw-h-full tw-w-full">
    <template #back>
      <div
        :class="{
          'tw-bg-orange-1': theme === 'orange',
          'tw-bg-blue-1': theme === 'blue',
        }"
        class="tw-h-full tw-w-full tw-flex tw-flex-col tw-justify-between tw-text-white tw-p-8 tw-rounded-4xl"
      >
        <div>
          <div class="tw-font-semibold tw-text-2xl tw-leading-6">{{ title }}</div>
          <div class="tw-mt-4 tw-text-sm tw-leading-6">{{ description }}</div>
        </div>
        <VButton
          class="tw-mt-3 tw-w-2/3 xl:tw-w-full tw-border-1"
          text="Apply now"
          :variant="theme === 'blue' ? 'blue' : 'orange-2'"
          height="48px"
        />
      </div>
    </template>
    <!-- :hover -->
    <template #front>
      <div class="tw-h-full tw-w-full tw-text-white tw-rounded-4xl tw-relative">
        <img
          v-if="image === 'experienced-professionals'"
          class="tw-w-full tw-h-full tw-rounded-4xl"
          src="@/assets/images/experienced-professionals.png"
          alt="Experienced professionals"
        />
        <img
          v-else-if="image === 'students-and-graduates'"
          class="tw-w-full tw-h-full tw-rounded-4xl"
          src="@/assets/images/students-and-graduates.jpg"
          alt="Experienced professionals"
        />

        <div
          class="tw-w-full tw-h-full tw-absolute tw-z-10 tw-top-0 tw-rounded-4xl"
          :class="
            {
              'bg-gradient-blue-1': theme === 'blue',
              'bg-gradient-orange-1': theme === 'orange',
            }
          "
        />

        <div
          class="tw-font-semibold tw-text-2xl tw-leading-6 tw-absolute tw-z-20 tw-bottom-0 tw-p-8"
        >
          <div class="max-w-200px tw-leading-8">{{ title }}</div>
        </div>
      </div>
    </template>
  </CardFlip>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, } from 'vue';


export default defineComponent({
  name: "CardInfoAnim",
  components: {

    VButton: defineAsyncComponent(() => import('@/components/ui/VButton.vue')),
    CardFlip: defineAsyncComponent(() => import('@/components/services/CardFlip.vue')),
  },
  props: {
    isMobile: { type: Boolean, default: false, },
    title: { type: [Number, String], default: '', },
    description: { type: [Number, String], default: "", },
    theme: { type: String, default: "", }, // blue orange
    image: { type: String, default: "", }, // @/assets/images/experienced-professionals.png
  },
  emits: ['click'],
});
</script>



<style lang="scss" scoped>
.card-info__content {
  max-width: 336px;
}
</style>