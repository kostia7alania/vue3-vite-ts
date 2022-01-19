<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <!--   
      <section>
      <PageTopSection theme="blue" class="min-h-400px">
      <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Story of Primelight OU</div>
      <div
      class="tw-text-lg tw-font-medium tw-leading-7 tw-max-w-5xl"
      >Primelight OU challenges the traditional norms of management consulting, providing quality advisory talent that delivers results at a value for money price point. We help our clients from private companies to governments and non-profits to challenge their own industries by becoming more innovative, efficient and dynamic.</div>
      </PageTopSection>
      </section>
    -->

    <!--
      --------
      @Section #1
      -------- 
    -->
    <section class="px-16px-48px-80px py-80px-120px-120px">
      <div class="topic-title tw-flex tw-justify-center">
        <div class="tw-max-w-3xl tw-text-center">{{ $t('We combine traditional consulting model') }}</div>
      </div>
      <div class="tw-flex tw-flex-wrap tw-gap-x-10 tw-gap-y-14 tw-mt-20">
        <!-- card #1 -->
        <div class="tw-h-[510px] tw-basis-[333px] tw-w-full tw-shrink tw-grow">
          <CardInfoAnim
            :title="$t('Fact-Based management consultig')"
            :description="$t('We are always looking for young talents from our local markets who want to develop professionally')"
            image="students-and-graduates"
            theme="orange"
          />
        </div>
        <!-- card #2 -->
        <div class="tw-h-[510px] tw-basis-[333px] tw-w-full tw-shrink tw-grow">
          <CardInfoAnim
            :title="$t('Experiences Team')"
            :description="$t('We use methodologies and approaches of the traditional consulting toolkit')"
            image="experienced-professionals"
            theme="orange"
          />
        </div>
        <!-- card #3 -->
        <div class="tw-h-[510px] w-basis-full md:tw-basis-[333px] tw-w-2/3 tw-shrink-0 tw-grow">
          <CardInfoAnim
            :title="$t('Practical and Iimpact-Oriented')"
            :description="$t('We truly believe that anyone can become a management consultant')"
            image="experienced-professionals"
            theme="orange"
          />
        </div>
        <!-- ROW 2 -->
        <!-- card #1 -->
        <div class="tw-h-[510px] tw-basis-full md:tw-basis-[333px] tw-w-2/3 tw-shrink-0 tw-grow">
          <CardInfoAnim
            :title="$t('Bold And Innovative')"
            :description="$t('We are always looking for young talents from our local markets who want to develop professionally')"
            image="students-and-graduates"
            theme="blue"
          />
        </div>
        <!-- card #2 -->
        <div
          class="tw-h-[510px] tw-basis-full md:tw-basis-1/2 xl:tw-basis-[400px] tw-shrink lg:tw-grow-0"
        >
          <CardInfoAnim
            :title="$t('Flexible And Efficient Model')"
            :description="$t('We use methodologies and approaches of the traditional consulting toolkit')"
            image="experienced-professionals"
            theme="orange"
          />
        </div>
      </div>
    </section>

    <!--
      --------
      @Section #2
      -------- 
    -->

    <section class="px-16px-48px-80px tw-bg-gray-4 tw-relative">
      <div
        :class="{
          'bg-challenge-xl': !sm,
          'bg-challenge-sm-and-xl': smAndXl,
          'bg-challenge-sm': sm,
        }"
        class="py-80px-120px-120px"
      >
        <div
          :class="{
            'bg-challenge-bottom-sm': sm,
          }"
          class="tw-flex tw-justify-between tw-flex-col xl:tw-flex-row tw-gap-10 md:tw-gap-20 xl:tw-gap-36"
        >
          <!-- left -->
          <div class="tw-basis-2/3 tw-grow-0 tw-shrink-1">
            <div class="topic-title">Primelight OU - {{ $t('the challenger advisory') }}</div>
            <div class="tw-pt-6 topic-description">
              <p class="tw-mt-2">{{ $t('We started our journey in Estonia') }}</p>
              <p class="tw-mt-2">{{ $t('Taking advantage of our unique origin and experience') }}</p>
              <p
                class="tw-mt-2"
              >{{ $t('Until today we have exported our business model to Emerging Europe') }}</p>
            </div>
            <div class="tw-font-semibold tw-text-xl tw-mt-6">{{ $t('Our main tenets for success') }}:</div>

            <ul
              class="tw-mt-2 tw-ml-5 tw-text-base tw-font-medium tw-list-disc tw-leading-7 topic-description"
            >
              <li>{{ $t('We challenge our competitors') }}</li>
              <li>{{ $t('We challenge our clients') }}</li>
              <li>{{ $t('We challenge ourselves') }}</li>
            </ul>
          </div>
          <!-- right -->
          <div class="tw-basis-1/2 tw-flex tw-justify-center tw-gap-4 sm:tw-gap-7 lg:tw-gap-10">
            <div
              class="tw-flex tw-flex-col tw-translate-y-8 lg:tw-translate-y-20 tw-gap-4 sm:tw-gap-7 lg:tw-gap-10"
            >
              <CardInfo number="18" :label="$t('National branches')" icon="branches" />
              <CardInfo number="29" :label="$t('Offices')" icon="consultations" />
            </div>
            <div class="tw-flex tw-flex-col tw-gap-4 sm:tw-gap-7 lg:tw-gap-10">
              <CardInfo number="350+" :label="$t('Consultants')" icon="offices" />
              <CardInfo number="150+" :label="$t('Software Developers')" icon="softGroup" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--
      --------
      @Section #3
      --------
      Where are we located
      --------
    -->
    <WhereWeLocated class="py-80px-120px-120px" />

    <!--
      --------
      @Section #2
      --------
    -->
    <section class="py-80px-120px-120px tw-bg-gray-4 tw-pt-7 tw-relative">
      <div class="tw-px-20 tw-gap-10">
        <!-- top -->
        <div class="gap-16px-24px-24px tw-flex tw-justify-between tw-flex-col xl:tw-flex-row">
          <div class="tw-flex-1 topic-title">{{ $t('Our history') }}</div>
          <div
            class="tw-flex-1 topic-description"
          >{{ $t('OU Primelight was established as an alliance of consulting companies in the Baltic States') }}</div>
        </div>
        <!-- bottom -->
        <div class="pt-40px-120px-80px">
          <!-- row 1 -->

          <img
            v-if="sm"
            class="tw-m-auto"
            src="@/assets/images/company/subway-mobile.png"
            alt="subway"
          />
          <img
            v-else-if="smAndXl"
            class="tw-m-auto"
            src="@/assets/images/company/subway-tablet.png"
            alt="subway"
          />
          <img
            v-else-if="xl"
            class="tw-m-auto"
            src="@/assets/images/company/subway-pc.png"
            alt="subway"
          />
        </div>
      </div>
    </section>

    <!--
      --------
      @Section #5
      --------
      Interested In cooperation?
      --------
    -->
    <section class="my-160px-240px-240px px-16px-48px-80px">
      <Cooperation :title="$t('Contact us and find out how we can work together')" />
    </section>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineAsyncComponent, defineComponent, onMounted } from 'vue';

import CardInfoAnim from '@/components/services/CardInfoAnim.vue'

export default defineComponent({
  name: 'Company',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    CardInfoAnim,
    CardInfo: defineAsyncComponent(() => import("@/components/services/CardInfo.vue")),
    WhereWeLocated: defineAsyncComponent(() => import("@/components/services/WhereWeLocated.vue")),
    Cooperation: defineAsyncComponent(() => import("@/components/services/Cooperation.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {

    onMounted(() => emit('ready'))

    const breakpoints = useBreakpoints(breakpointsTailwind)
    const sm = breakpoints.smaller('sm')
    const smAndXl = breakpoints.between('sm', 'xl')
    const xl = breakpoints.greater('xl')

    return { sm, smAndXl, xl }
  }
});


</script>

<style lang="scss" scoped>
.bg-challenge-xl {
  background-image: url("@/assets/images/company/bg-challenge-xl.png");
  background-repeat: no-repeat;
  background-position: top right;
}
.bg-challenge-sm-and-xl {
  background-image: url("@/assets/images/company/bg-challenge-xl.png");
  background-repeat: no-repeat;
  background-position: bottom right;
}
.bg-challenge-sm {
  background-image: url("@/assets/images/company/bg-challenge-sm.png");
  background-repeat: no-repeat;
  background-position: top right;
}
.bg-challenge-bottom-sm {
  background-image: url("@/assets/images/company/bg-challenge-bottom-sm.png");
  background-repeat: no-repeat;
  background-position: bottom right;
}
</style>