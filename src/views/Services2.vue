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
      <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Services</div>
      <div
      class="tw-text-lg tw-font-medium tw-leading-7 tw-max-w-5xl"
      >Our team has strong educational credentials, intellectual curiosity, proven leadership capacity and commitment to values. We are analytically rigorous, delivering fact-based advice to get the job done. In doing so, we provide great value for the money price point, always striving to understand and meet the customer's needs as efficiently as possible, with the least negative impact on the environment.</div>
      </PageTopSection>
      </section>
    -->

    <!--
      --------
      @Section #1
      --------
      We help
    -->
    <section class="my-80px-104px-120px px-16px-48px-80px">
      <div class="max-layout-width">
        <div class="md:tw-text-center">
          <h2 class="topic-title">{{ $t('We help') }}:</h2>
        </div>
        <div class="mt-60px-80px-80px">
          <div class="gap-40px-60px-40px tw-flex tw-flex-col tw-flex-wrap xl:tw-flex-row">
            <HelpColumn
              class="tw-flex-1 min-w-400px tw-rounded-4xl"
              :title="$t('Corporations')"
              :description="$t('We assist companies in various industries such as telecommunications')"
              icon="circle-users"
            />
            <HelpColumn
              class="tw-flex-1 min-w-400px tw-rounded-4xl"
              :title="$t('Start-up companies')"
              :description="$t('We support start -ups and small companies involved in different industries')"
              icon="circle-startup"
            />
            <HelpColumn
              class="tw-flex-1 min-w-400px tw-rounded-4xl"
              :title="$t('Government organizations')"
              :description="$t('We provide services for government')"
              icon="circle-government"
            />
          </div>
        </div>
      </div>
    </section>
    <!--
      --------
      @Section #2
      --------
    -->
    <section
      class="px-16px-48px-80px tw-relative tw-bg-gray-4"
      :class="{
        'bg-services-we-provide-top__sm': smallerXl,
        'bg-services-we-provide-top__xl': !smallerXl,
      }"
    >
      <div
        class="py-80px-120px-120px"
        :class="{
          'bg-services-we-provide-bottom__sm': smallerXl,
        }"
      >
        <div class="max-layout-width">
          <!-- title -->
          <div class="topic-title md:tw-mb-20 lg:tw-mb-0">{{ $t('Our Services') }}</div>
          <!-- rows -->
          <div
            class="mt-0-80px-80px gap-40px-48px-0 md:tw-bg-white tw-rounded-4xl tw-pt-15 md:tw-pt-8 tw-flex tw-flex-col"
          >
            <CardInfoDynamicHorizontal
              :title="$t('Strategy')"
              :description="$t('Our consultants advise organizations on high-level decisions in strategic planning')"
              icon="circle-strategy"
            />
            <CardInfoDynamicHorizontal
              :title="$t('Innovation')"
              :description="$t('We help making future by being in the whole innovation value chain from helping clients innovate to evaluating')"
              icon="circle-innovation"
            />
            <CardInfoDynamicHorizontal
              :title="$t('Funding')"
              :description="$t('We help clients to choose the right funding opportunities')"
              icon="circle-funding"
            />
            <CardInfoDynamicHorizontal
              :title="$t('Research')"
              :description="$t('We collect and analyze external and internal information')"
              icon="circle-research"
            />
            <CardInfoDynamicHorizontal
              :title="$t('Implementation')"
              :description="$t('We help our clients to become more competitive')"
              icon="circle-implementation"
            />
            <CardInfoDynamicHorizontal
              :title="$t('Digital')"
              :description="$t('We provide support and assistance at all stages of the project implementation')"
              icon="circle-digital"
            />
            <CardInfoDynamicHorizontal
              :title="$t('Sustainability')"
              :description="$t('We ensure our clients stability in all daily operations in a strategic')"
              icon="circle-sustainability"
            />
          </div>
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
      <Cooperation :title="$t('Interested In cooperation')" />
    </section>

    <!--
      --------
      @Section #9
      --------
      Case studies
      --------
    -->
    <section class="my-160px-240px-240px">
      <LatestArticles :title="$t('Case studies')" category="Case studies" />
    </section>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineAsyncComponent, defineComponent, onMounted } from 'vue';

import HelpColumn from "@/components/services2/HelpColumn.vue"

export default defineComponent({
  name: 'Services2',
  components: {
    HelpColumn,
    CardInfoDynamicHorizontal: defineAsyncComponent(() => import("@/components/services2/CardInfoDynamicHorizontal.vue")),
    Cooperation: defineAsyncComponent(() => import("@/components/services/Cooperation.vue")),
    LatestArticles: defineAsyncComponent(() => import("@/components/services/LatestArticles.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const smallerXl = breakpoints.smaller('xl')
    const sm = breakpoints.smaller('sm')

    onMounted(() => emit('ready'))
    return { smallerXl, sm }
  }
});
</script>

<!-- bg-services-we-provide -->
<style lang="scss" scoped>
.bg-services-we-provide-top__xl {
  background-repeat: no-repeat;
  background-position: top right;
  // background-size: cover;
  background-image: url("@/assets/images/services2/bg-services-we-provide-top__xl.png");
}

.bg-services-we-provide-top__sm {
  background-repeat: no-repeat;
  background-position: top right;
  // background-size: cover;
  background-image: url("@/assets/images/services2/bg-services-we-provide-top__sm.png");
  // background-repeat: repeat-y;
}

.bg-services-we-provide-bottom__sm {
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: url("@/assets/images/services2/bg-services-we-provide-bottom__sm.png");
}
</style>

