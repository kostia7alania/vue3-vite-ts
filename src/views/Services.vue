<template>
  <div>
    <!--
      --------
      @Section #0
      --------
    -->
    <ServiceSwipper />
    <!--
      --------
      @Section #1
      --------
    -->
    <section class="my-120-80 tw-bg-gray-4 tw-relative">
      <div class="py-80px-104px-120px tw-relative tw-z-10">
        <div
          class="gap-40px-16px px-16px-48px-80px tw-flex tw-justify-between tw-flex-wrap lg:tw-flex-nowrap"
        >
          <!-- left -->
          <div class="lg:tw-pt-20 tw-flex-1 tw-basis-full lg:tw-basis-auto">
            <div class="topic-title">OU Primelight - Management Consulting</div>
            <div class="mt-16px-24px-24px topic-description">
              <div>Started as an alliance of advisory firms in the Baltic States, and headquartered in Estonia, OÜ Primelight is now the leading management consultancy from Central Eastern Europe.</div>
              <div
                class="tw-mt-2"
              >OU Primelight is the leading management consultancy from Central Eastern Europe. Our consultancy services operate in over 40 countries in Europe, Asia, and USA, resulting in more than 10 000 successful projects. OU Primelight provides exclusive and traditional management consulting services to all clients over the world.</div>
              <div
                class="tw-mt-2"
              >We combine bold strategies and transformative technologies to help organizations innovate more sustainably, achieve lasting gains in performance, and build workforces that will thrive for this generation and the next.</div>
            </div>
            <VButton
              text="Learn more about"
              class="btn-h-48-56 tw-mt-10 lg:tw-mt-15"
              variant="blue"
              width="222px"
            />
          </div>
          <!-- right -->
          <div
            class="gap-40px-16px tw-flex tw-justify-center tw-flex-1 tw-basis-full lg:tw-basis-auto"
          >
            <div class="gap-40px-16px tw-flex tw-flex-col tw-mt-10 lg:tw-mt-20">
              <CardInfo number="18" label="National branches" icon="branches" />
              <CardInfo number="29" label="Offices" icon="consultations" />
            </div>
            <div class="gap-40px-16px tw-flex tw-flex-col">
              <CardInfo number="350+" label="Consultants" icon="offices" />
              <CardInfo number="150+" label="Software Developers" icon="softGroup" />
            </div>
          </div>
        </div>
      </div>
      <div class="tw-absolute tw-right-0 tw-top-0">
        <BgPatternChallenge />
      </div>
    </section>
    <!--
      --------
      @Section #2
      --------
      What we do?
    -->
    <section class="my-120-80 tw-relative">
      <div class="gap-40px-16px px-16px-48px-80px">
        <!-- top -->
        <div class="wrap-wrap-nowrap tw-flex tw-justify-between">
          <div class="basis-full-full-half tw-flex-1 topic-title">What we do?</div>
          <div class="mt-16px-24px-0 basis-full-full-half tw-flex-1 topic-description">
            <div>OU Primeligt provides management consulting and data analytic services to companies, star-ups, SMEs, government organizations and etc., delivering professional services and great value for money.</div>
            <div
              class="tw-mt-2"
            >Our services include strategy development, innovation, funding, research and implementation.</div>
            <div
              class="tw-mt-2"
            >We take a consistent approach to recruiting and skills development regardless of where our people are located, so that we can quickly deliver the right team, with the right experience and expertise, to every client, anywhere in the world.</div>
          </div>
        </div>
        <!-- bottom -->
        <div v-if="!sm" class="gap-40px-16px">
          <!-- row 1 -->
          <div class="gap-40px-16px tw-flex tw-flex-wrap tw-mt-20">
            <div class="tw-flex-1 xl:tw-flex-none xl:tw-basis-auto">
              <!-- 1 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Strategy"
                description="OU Primeligt Provides methodological expertise to help its clients capture growth opportunity. "
                icon="circle-strategy"
                icon-class="tw-text-orange-1"
              />
            </div>
            <div class="tw-relative tw-flex-1 xl:tw-basis-auto">
              <!-- 2 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Innovation"
                description="We use innovative technologies to identify new ways to reach consumers and build enterprise resilience."
                icon="circle-innovation"
                icon-class="tw-text-blue-1"
              />
              <div class="tw-absolute tw-top-0 tw-right-0 tw-hidden xl:tw-block">
                <BgPatternInnovation class="tw-rounded-4xl" />
              </div>
            </div>
          </div>
          <!-- row 2 -->
          <div class="gap-40px-16px tw-flex tw-flex-wrap tw-mt-10">
            <div class="tw-flex-1 tw-basis-5/12 tw-w-1/2 xl:tw-basis-1/4">
              <!-- 3 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Funding"
                description="Safeguard external financing for company’s growth."
                icon="circle-funding"
                icon-class="tw-text-blue-1"
              />
            </div>
            <div class="tw-flex-1 tw-basis-5/12 tw-w-1/2 xl:tw-basis-1/4">
              <!-- 4 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Research"
                description="We gather data and analytics to choose the right decision for our clients. "
                icon="circle-research"
                icon-class="tw-text-orange-1"
              />
            </div>
            <div class="tw-flex-1 tw-basis-5/12 xl:tw-basis-1/4">
              <!-- 5 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Implementation"
                description="Implement the best solutions for our projects to our clients."
                icon="circle-implementation"
                icon-class="tw-text-blue-1"
              />
            </div>
            <!-- row 3 -->
            <div class="tw-relative tw-flex-1 tw-basis-5/12 xl:tw-basis-3/5">
              <!-- 6 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Digital"
                description="We are using the latest IT technologies to drive the organization’s business."
                icon="circle-digital"
                icon-class="tw-text-orange-1"
              />
              <div
                class="tw-absolute tw-top-0 tw-bottom-0 tw-right-0 tw-overflow-hidden tw-hidden xl:tw-block"
              >
                <BgPatternDigital class="tw-rounded-4xl" />
              </div>
            </div>
            <div
              class="tw-flex-1 tw-basis-6/12 tw-flex-grow-0 xl:tw-flex-grow tw-w-1/2 xl:tw-basis-1/4"
            >
              <!-- 7 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Sustainability"
                description="Connect companies and public organizations."
                icon="circle-sustainability"
                icon-class="tw-text-blue-1"
              />
            </div>
          </div>
        </div>
        <CardsSwiper v-else class="tw-mt-15">
          <!-- MOBILE -->
          <template #test1>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Strategy"
              description="OU Primeligt Provides methodological expertise to help its clients capture growth opportunity. "
              icon="circle-strategy"
              icon-class="tw-text-orange-1"
            />
          </template>
          <template #test2>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Innovation"
              description="We use innovative technologies to identify new ways to reach consumers and build enterprise resilience."
              icon="circle-innovation"
              icon-class="tw-text-blue-1"
            />
          </template>

          <template #test3>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Funding"
              description="Safeguard external financing for company’s growth."
              icon="circle-funding"
              icon-class="tw-text-blue-1"
            />
          </template>

          <template #test4>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Research"
              description="We gather data and analytics to choose the right decision for our clients. "
              icon="circle-research"
              icon-class="tw-text-orange-1"
            />
          </template>
          <template #test5>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Implementation"
              description="Implement the best solutions for our projects to our clients."
              icon="circle-implementation"
              icon-class="tw-text-blue-1"
            />
          </template>
          <template #test6>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Digital"
              description="We are using the latest IT technologies to drive the organization’s business."
              icon="circle-digital"
              icon-class="tw-text-orange-1"
            />
          </template>
          <template #test7>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Sustainability"
              description="Connect companies and public organizations."
              icon="circle-sustainability"
              icon-class="tw-text-blue-1"
            />
          </template>
        </CardsSwiper>
      </div>
    </section>
    <!--
      --------
      @Section #3
      --------
      Where we are located? 
      --------
    -->
    <WhereWeLocated class="tw-bg-gray-4 py-80px-104px-120px" />

    <!--
      --------
      @Section #4
      -------- 
      Who should join our team?
    -->
    <section class="my-120-80" :class="{ 'bg-should-join-mobile': sm }">
      <WhoJoinToTeam is-shown-button />
    </section>

    <!--
      --------
      @Section #5
      --------
      Interested In cooperation?
      --------
    -->
    <div class="px-16px-48px-80px">
      <Cooperation class="my-160px-240px-240px tw-bg-white" title="Interested In cooperation?" />
    </div>

    <!--
      --------
      @Section #9
      --------
      Our latest articles
      --------
    -->
    <section class="my-160px-240px-240px px-16px-48px-80px">
      <LatestArticles />
    </section>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineAsyncComponent, defineComponent, onMounted } from 'vue';

import CardInfo from "@/components/services/CardInfo.vue"
import CardsSwiper from "@/components/services/CardsSwiper.vue"
import ServiceSwipper from "@/components/services/ServiceSwipper.vue"

export default defineComponent({
  name: 'Services',
  components: {
    ServiceSwipper,
    CardInfo,
    CardsSwiper,
    // ServiceSwipper: defineAsyncComponent(() => import("@/components/services/ServiceSwipper.vue")),
    WhoJoinToTeam: defineAsyncComponent(() => import("@/components/services/WhoJoinToTeam.vue")),
    CardInfoDynamic: defineAsyncComponent(() => import("@/components/services/CardInfoDynamic.vue")),
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
    BgPatternChallenge: defineAsyncComponent(() => import("@/components/patterns/BgPatternChallenge.vue")),
    BgPatternInnovation: defineAsyncComponent(() => import("@/components/patterns/BgPatternInnovation.vue")),
    BgPatternDigital: defineAsyncComponent(() => import("@/components/patterns/BgPatternDigital.vue")),
    Cooperation: defineAsyncComponent(() => import("@/components/services/Cooperation.vue")),
    WhereWeLocated: defineAsyncComponent(() => import("@/components/services/WhereWeLocated.vue")),
    LatestArticles: defineAsyncComponent(() => import("@/components/services/LatestArticles.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const sm = breakpoints.smaller('sm')

    onMounted(() => emit('ready'))

    return { sm }
  }
});
</script>


<style lang="scss" scoped>
.bg-should-join-mobile {
  background-image: url("@/assets/images/patterns/bg-should-join-mobile.png");
  background-repeat: no-repeat;
  background-position: center right;
}
</style>