<template>
  <div class="px-16px-48px-80px">
    <div class="tw-flex tw-justify-center tw-flex-wrap tw-gap-x-6 tw-gap-y-10 tw-relative">
      <!-- card #1 -->
      <div
        v-if="!sm"
        class="tw-basis-5/12 xl:tw-basis-1/4 w-444px tw-h-[460px] tw-mt-10 xl:tw-mt-0 tw-order-2 xl:tw-order-1"
      >
        <CardInfoAnim
          show-button
          :title="$t('Students and graduates')"
          :description="$t('We are always looking for young talents from our local markets who want to develop professionally')"
          image="students-and-graduates"
          theme="orange"
        />
      </div>
      <!-- card #2 -->
      <div
        v-if="!sm"
        class="tw-basis-5/12 xl:tw-basis-1/4 w-444px tw-h-[460px] tw-mt-10 xl:tw-mt-0 tw-order-3 xl:tw-order-2"
      >
        <CardInfoAnim
          show-button
          :title="$t('Experienced professionals')"
          :description="$t('We truly believe that anyone can become a management consultant')"
          image="experienced-professionals"
          theme="blue"
        />
      </div>

      <!-- card #3 -->
      <div
        class="tw-flex-1 tw-grow-1 tw--my-4 tw-pl-8 tw-rounded-4xl tw-order-1 xl:tw-order-3 tw-basis-full xl:tw-basis-5/12 tw-relative tw-z-10"
      >
        <div class="tw-font-semibold tw-text-2xl tw-leading-6 tw-rounded-4xl">
          <h2 class="topic-title xl:tw-mt-5">{{ $t('Join us') }}</h2>

          <div class="topic-description">
            <div
              class="mt-16px-24px-24px tw-text-base topic-description"
            >{{ $t('Our people are based at many different locations') }}</div>
            <div
              class="mt-16px-24px-24px tw-font-semibold tw-text-xl"
            >{{ $t('Our employees excel in both conceptual planning and implementation and offer you') }}</div>

            <ul class="tw-mt-2 tw-ml-5 tw-text-base tw-font-medium tw-list-disc tw-leading-7">
              <li>{{ $t('International teams and projects') }}</li>
              <li>{{ $t('Positive and impactful innovation') }}</li>
              <li>{{ $t('Diversified work environment') }}</li>
              <li>{{ $t('Focus on employee growth and development') }}</li>
              <li>{{ $t('Team building and training packages') }}</li>
            </ul>
            <VButton
              v-if="isShownButton"
              class="tw-mt-10 tw-text-base tw-font-semibold h-56px-48px-48px"
              text="Apply now"
              variant="blue"
              width="244px"
            />
          </div>
        </div>
      </div>

      <!--  -->
    </div>
    <!-- swiper -->
    <CardsSwiper v-if="sm" class="tw-mt-20">
      <!-- MOBILE -->
      <template #test1>
        <div class="tw-h-[444px]">
          <CardInfoAnim
            :title="$t('Students and graduates')"
            :description="$t('We are always looking for young talents from our local markets who want to develop professionally')"
            image="students-and-graduates"
            theme="orange"
          />
        </div>
      </template>
      <template #test2>
        <div class="tw-h-[444px]">
          <CardInfoAnim
            :title="$t('Experienced professionals')"
            :description="$t('We truly believe that anyone can become a management consultant')"
            image="experienced-professionals"
            theme="blue"
          />
        </div>
      </template>
    </CardsSwiper>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineComponent, defineAsyncComponent, } from 'vue';


export default defineComponent({
  name: "WhoJoinToTeam",
  components: {
    CardInfoAnim: defineAsyncComponent(() => import("@/components/services/CardInfoAnim.vue")),
    VButton: defineAsyncComponent(() => import('@/components/ui/VButton.vue')),
    CardsSwiper: defineAsyncComponent(() => import("@/components/services/CardsSwiper.vue")),
  },
  props: {
    isShownButton: { type: Boolean, default: false },
  },
  emits: ['click'],
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const sm = breakpoints.smaller('sm')

    return { sm, }
  }
});
</script>


