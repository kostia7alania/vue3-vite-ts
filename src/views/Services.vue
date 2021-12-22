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
          class="gap-40px-16px px-80px-48px-16px tw-flex tw-justify-between tw-flex-wrap lg:tw-flex-nowrap"
        >
          <!-- left -->
          <div class="lg:tw-pt-20 tw-flex-1 tw-basis-full lg:tw-basis-auto">
            <div class="topic-title">OÜ Primelight - The Challengeʳ Advisory</div>
            <div class="mt-16px-24px-24px topic-description">
              <div>Started as an alliance of advisory firms in the Baltic States, and headquartered in Estonia, OÜ Primelight is now the leading management consultancy from Central Eastern Europe.</div>
              <div
                class="tw-mt-2"
              >Our consultants support companies interested in and operating in over 40 countries in Europe, Asia, and the Americas, resulting in more than 10 000 completed projects.</div>
              <div
                class="tw-mt-2"
              >OÜ Primelight challenges the traditional management consulting industry, providing high-quality fact-based and analytically rigorous consulting services to all clients at a reasonable.</div>
            </div>
            <VButton text="Learn more about" class="tw-mt-10" variant="blue" width="222px" />
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
      What do we do?
    -->
    <section class="my-120-80 tw-relative">
      <div class="gap-40px-16px px-80px-48px-16px">
        <!-- top -->
        <div class="wrap-wrap-nowrap tw-flex tw-justify-between">
          <div class="basis-full-full-half tw-flex-1 topic-title">What do we do?</div>
          <div
            class="mt-16px-24px-0 basis-full-full-half tw-flex-1 topic-description"
          >OÜ Primelight provides management consulting and data analytics services to corporations, start-ups, SMEs, governments and NGOs, delivering great value for money price point. We offer a full spectrum of management consulting services: strategy, innovation, funding, research, digital and implementation.</div>
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
                description="Providing classical fact-based strategic management consulting"
                icon="circle-strategy"
                icon-class="tw-text-orange-1"
              />
            </div>
            <div class="tw-relative tw-flex-1 xl:tw-basis-auto">
              <!-- 2 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Innovation"
                description="Helping corporations, start-ups and governments innovate"
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
                description="Securing external financing for organization’s growth"
                icon="circle-funding"
                icon-class="tw-text-blue-1"
              />
            </div>
            <div class="tw-flex-1 tw-basis-5/12 tw-w-1/2 xl:tw-basis-1/4">
              <!-- 4 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Research"
                description="Gathering and analyzing information to help our clients make the right decisions"
                icon="circle-research"
                icon-class="tw-text-orange-1"
              />
            </div>
            <div class="tw-flex-1 tw-basis-5/12 xl:tw-basis-1/4">
              <!-- 5 -->
              <CardInfoDynamic
                class="tw-rounded-4xl"
                title="Implementation"
                description="Executing projects and initiatives together with our clients"
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
                description="Using big-data and latest IT technologies to drive the organization’s digitalization"
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
                description="Supporting companies and public organizations in the transformation"
                icon="circle-sustainability"
                icon-class="tw-text-blue-1"
              />
            </div>
          </div>
        </div>
        <CardsSwiper v-else >
          <!-- MOBILE -->
          <template #test1>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Strategy"
              description="Providing classical fact-based strategic management consulting"
              icon="circle-strategy"
              icon-class="tw-text-orange-1"
            />
          </template>
          <template #test2>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Innovation"
              description="Helping corporations, start-ups and governments innovate"
              icon="circle-innovation"
              icon-class="tw-text-blue-1"
            />
          </template>

          <template #test3>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Funding"
              description="Securing external financing for organization’s growth"
              icon="circle-funding"
              icon-class="tw-text-blue-1"
            />
          </template>

          <template #test4>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Research"
              description="Gathering and analyzing information to help our clients make the right decisions"
              icon="circle-research"
              icon-class="tw-text-orange-1"
            />
          </template>
          <template #test5>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Implementation"
              description="Executing projects and initiatives together with our clients"
              icon="circle-implementation"
              icon-class="tw-text-blue-1"
            />
          </template>
          <template #test6>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Digital"
              description="Using big-data and latest IT technologies to drive the organization’s digitalization"
              icon="circle-digital"
              icon-class="tw-text-orange-1"
            />
          </template>
          <template #test7>
            <CardInfoDynamic
              class="dynamic-info-card"
              title="Sustainability"
              description="Supporting companies and public organizations in the transformation"
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
      Where are we located
      --------
    -->
    <WhereWeLocated class="tw-bg-gray-4 py-80px-104px-120px" />

    <!--
      --------
      @Section #4
      -------- 
      Who should join our team?
    -->
    <section class="my-120-80 tw-relative">
      <WhoJoinToTeam is-shown-button />
      <div v-if="sm" class="tw-absolute tw-top-1/2 tw-bottom-1/2 tw--translate-y-1/2 tw-right-0">
        <img src="@/assets/images/patterns/bg-should-join-mobile.png" />
      </div>
    </section>

    <!--
      --------
      @Section #5
      --------
      Interested In cooperation?
      --------
    -->
    <Cooperation
      class="my-160px-240px-240px tw-bg-white tw-mx-20"
      title="Interested In cooperation?"
    />

    <!--
      --------
      @Section #9
      --------
      Our latest articles
      --------
    -->
    <section class="my-160px-240px-240px tw-px-20">
      <h2 class="topic-title max-w-400px tw-my-20">Our latest articles</h2>
      <div class="gap-40px-16px tw-flex">
        <ArticleCard
          class="tw-w-full tw-basis-full"
          date="2021-10-11"
          title="Poland-based SAS Advisors is joining OÜ Primelight"
        />
        <ArticleCard
          class="tw-w-full tw-basis-full"
          date="2021-10-12"
          title="Poland-based SAS Advisors is joining OÜ Primelight"
        />
        <ArticleCard
          class="tw-w-full tw-basis-full"
          date="2021-10-13"
          title="Poland-based SAS Advisors is joining OÜ Primelight"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'Services',
  components: {
    ServiceSwipper: defineAsyncComponent(() => import("@/components/services/ServiceSwipper.vue")),
    CardsSwiper: defineAsyncComponent(() => import("@/components/services/CardsSwiper.vue")),
    CardInfo: defineAsyncComponent(() => import("@/components/services/CardInfo.vue")),
    WhoJoinToTeam: defineAsyncComponent(() => import("@/components/services/WhoJoinToTeam.vue")),
    CardInfoDynamic: defineAsyncComponent(() => import("@/components/services/CardInfoDynamic.vue")),
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
    BgPatternChallenge: defineAsyncComponent(() => import("@/components/patterns/BgPatternChallenge.vue")),
    BgPatternInnovation: defineAsyncComponent(() => import("@/components/patterns/BgPatternInnovation.vue")),
    BgPatternDigital: defineAsyncComponent(() => import("@/components/patterns/BgPatternDigital.vue")),
    Cooperation: defineAsyncComponent(() => import("@/components/services/Cooperation.vue")),
    ArticleCard: defineAsyncComponent(() => import("@/components/articles/ArticleCard.vue")),
    WhereWeLocated: defineAsyncComponent(() => import("@/components/services/WhereWeLocated.vue")),

  },
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const sm = breakpoints.smaller('sm')

    return { sm }
  }
});
</script>


<style lang="scss" scoped>
.world-map {
  max-height: 533px;
}
</style>