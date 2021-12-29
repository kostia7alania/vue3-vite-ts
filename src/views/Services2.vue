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
      <div class="md:tw-text-center">
        <h2 class="topic-title">We help:</h2>
      </div>
      <div class="mt-60px-80px-80px">
        <div class="gap-40px-60px-40px tw-flex tw-flex-col tw-flex-wrap xl:tw-flex-row">
          <HelpColumn
            class="tw-flex-1 min-w-400px tw-rounded-4xl"
            title="Corporations"
            description="We officiate companies in various industries including telecommunications, banking, insurance, retail, wholesale, manufacturing, FMCG, transport, energy, HORECa, media and publishing, IT services, construction, forestry, agriculture, real estate, private equity, and professional services."
            icon="circle-users"
          />
          <HelpColumn
            class="tw-flex-1 min-w-400px tw-rounded-4xl"
            title="Start-ups and smes"
            description="We serve start-ups and small companies across the spectrum of various industries, with a focus on innovative companies, R&D commercialization and start-up ecosystem development."
            icon="circle-startup"
          />
          <HelpColumn
            class="tw-flex-1 min-w-400px tw-rounded-4xl"
            title="Governments and ngos"
            description="We serve central governmental institutions (ministries and governments agencies), regions and municipalities, educational institutions, including Universities, hospitals, state-owned companies, public infrastructure and energy utility establishments, donor and other international organizations (EBRD, World Bank, European Commission), non-governmental organizations."
            icon="circle-government"
          />
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
      <div class="py-80px-120px-120px"
        :class="{
        'bg-services-we-provide-bottom__sm': smallerXl,
      }"
      >
        <!-- title -->
        <div class="topic-title  md:tw-mb-20 lg:tw-mb-0">Services we provide?</div>
        <!-- rows -->
        <div class="mt-0-80px-80px gap-40px-48px-0 md:tw-bg-white tw-rounded-4xl tw-pt-15 md:tw-pt-8 tw-flex tw-flex-col ">
          <CardInfoDynamicHorizontal
            title="Strategy"
            description="We work side-by-side with our clients on strategic planning, expansion to new markets, change management and organizational transformations to create meaningful changes in their business, organization and society. In our work, we offer the best strategy practices and experience gained across many countries and industries."
            icon="circle-strategy"
          />
          <CardInfoDynamicHorizontal
            title="Innovation"
            description="We help start-ups to grow and scale; universities to connect research with business and commercialize R&D; corporates to build and accelerate innovation inside the company, and governments to build innovation communities and ecosystems."
            icon="circle-innovation"
          />
          <CardInfoDynamicHorizontal
            title="Funding"
            description="We help clients identify funding opportunities, develop the project and follow through the implementation process. We provide advisory services in national EU program funding, EU-level program funding (Horizon 2020), equity investor attraction and private sector lending."
            icon="circle-funding"
          />
          <CardInfoDynamicHorizontal
            title="Research"
            description="We gather and analyze external and internal information in order to deliver valuable insights for decision-making of our clients. We perform market research, product market research, attitude market research, public policy research and evaluations of public policy reforms."
            icon="circle-research"
          />
          <CardInfoDynamicHorizontal
            title="Implementation"
            description="We help clients become more competitive in the digital era by using Big Data and the latest IT technologies. Our services include digital strategy, customer journey analysis and redesign, UI/UX, web and mobile development, customer base analysis and segmentation, churn analysis, and other IT and Big Data services."
            icon="circle-implementation"
          />
          <CardInfoDynamicHorizontal
            title="Digital"
            description="We offer assistance at any stage of the project implementation, by setting up and running project management office (PMO), helping with business development/expansion and filling temporary capacity and competency gaps with on-hire consultants, as well as building outsourcing teams in Central Eastern Europe."
            icon="circle-digital"
          />
          <CardInfoDynamicHorizontal
            title="Sustainability"
            description="We enable our clients to integrate sustainability and sustainable innovation in daily operations in a strategic and quantifiable manner, as well as assist them in locating and obtaining optimal funding opportunities for a transformation into a more agile, resilient, and eco-friendly entity."
            icon="circle-sustainability"
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
      <Cooperation title="Interested In cooperation?" />
    </section>

    <!--
      --------
      @Section #9
      --------
      Case studies
      --------
    -->
    <section class="my-160px-240px-240px px-16px-48px-80px">
      <h2 class="topic-title max-w-400px my-120-80">Case studies</h2>
      <div v-if="!sm" class="gap-40px-16px tw-flex">
        <!-- DESKTOP -->
        <ArticleCardOld class="tw-w-full tw-basis-full" date="2021-10-11" title="Poland-based SAS Advisors is joining OÜ Primelight" />
        <ArticleCardOld class="tw-w-full tw-basis-full" date="2021-10-12" title="Poland-based SAS Advisors is joining OÜ Primelight" />
        <ArticleCardOld class="tw-w-full tw-basis-full" date="2021-10-13" title="Poland-based SAS Advisors is joining OÜ Primelight" />
      </div>
      <CardsSwiper v-else>
        <!-- MOBILE -->
        <template #test1>
          <ArticleCardOld class="article-card-swiper" date="2021-10-11" title="Poland-based SAS Advisors is joining OÜ Primelight" />
        </template>
        <template #test2>
          <ArticleCardOld class="article-card-swiper" date="2021-10-12" title="Poland-based SAS Advisors is joining OÜ Primelight" />
        </template>
        <template #test3>
          <ArticleCardOld class="article-card-swiper" date="2021-10-13" title="Poland-based SAS Advisors is joining OÜ Primelight" />
        </template>
      </CardsSwiper>
    </section>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineAsyncComponent, defineComponent, onMounted } from 'vue';

import CardsSwiper from "@/components/services/CardsSwiper.vue"
import HelpColumn from "@/components/services2/HelpColumn.vue"

export default defineComponent({
  name: 'Services2',
  components: {
    CardsSwiper,
    HelpColumn,
    CardInfoDynamicHorizontal: defineAsyncComponent(() => import("@/components/services2/CardInfoDynamicHorizontal.vue")),
    Cooperation: defineAsyncComponent(() => import("@/components/services/Cooperation.vue")),
    ArticleCardOld: defineAsyncComponent(() => import("@/components/articles/ArticleCardOld.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const smallerXl = breakpoints.smaller('xl')
    const sm = breakpoints.smaller('sm')

    onMounted(() => emit('ready'))
    return { smallerXl, sm}
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

