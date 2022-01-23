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
      <div class="max-layout-width py-80px-104px-120px tw-relative tw-z-10">
        <div
          class="gap-40px-16px px-16px-48px-80px tw-flex tw-justify-between tw-flex-wrap lg:tw-flex-nowrap"
        >
          <!-- left -->
          <div class="lg:tw-pt-20 tw-flex-1 tw-basis-full lg:tw-basis-auto">
            <div class="topic-title">{{ $t('Primelight OÜ management consulting') }}</div>
            <div class="mt-16px-24px-24px topic-description">
              <div>{{ $t('Started as an alliance of advisory firms in the Baltic States') }}.</div>
              <div
                class="tw-mt-2"
              >{{ $t('Primelight OÜ is the leading management consultancy from Central Eastern Europe') }}.</div>
              <div
                class="tw-mt-2"
              >{{ $t('We combine bold strategies and transformative technologies to help organizations innovate more sustainably') }}.</div>
            </div>
            <router-link :to="{ name: 'company' }">
              <VButton
                :text="$t('Learn more about')"
                class="btn-h-48-56 tw-mt-10 lg:tw-mt-15"
                variant="blue"
                width="222px"
              />
            </router-link>
          </div>
          <!-- right -->
          <div
            class="gap-40px-16px tw-flex tw-justify-center tw-flex-1 tw-basis-full lg:tw-basis-auto"
          >
            <div class="gap-40px-16px tw-flex tw-flex-col tw-mt-10 lg:tw-mt-20">
              <CardInfo number="18" :label="$t('National branches')" icon="branches" />
              <CardInfo number="29" :label="$t('Offices')" icon="consultations" />
            </div>
            <div class="gap-40px-16px tw-flex tw-flex-col">
              <CardInfo number="350+" :label="$t('Consultants')" icon="offices" />
              <CardInfo number="150+" :label="$t('Software Developers')" icon="softGroup" />
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
      <div class="max-layout-width-overflow-auto gap-40px-16px px-16px-48px-80px">
        <!-- top -->
        <div class="wrap-wrap-nowrap tw-flex tw-justify-between">
          <div class="basis-full-full-half tw-flex-1 topic-title">{{ $t('What we do') }}</div>
          <div class="mt-16px-24px-0 basis-full-full-half tw-flex-1 topic-description">
            <div>{{ $t('OU Primeligt provides management consulting and data analytic services to companies') }}.</div>
            <div class="tw-mt-2">{{ $t('Our services include strategy development') }}.</div>
            <div
              class="tw-mt-2"
            >{{ $t('We take a consistent approach to recruiting and skills development regardless of where our people are located') }}.</div>
          </div>
        </div>
        <!-- bottom -->
        <div v-if="!sm" class="gap-40px-16px">
          <!-- row 1 -->
          <div class="gap-40px-16px tw-flex tw-flex-wrap tw-mt-20">
            <div class="tw-flex-1 xl:tw-flex-none xl:tw-basis-auto">
              <!-- 1 -->
              <CardInfoDynamic
                class="tw-rounded-4xl border-gray-card-gray-1"
                :title="$t('Strategy')"
                :description="$t('OU Primeligt Provides methodological expertise to help its clients capture growth opportunity')"
                icon="circle-strategy"
                icon-class="tw-text-orange-1"
              />
            </div>
            <div class="tw-relative tw-flex-1 xl:tw-basis-auto">
              <!-- 2 -->
              <CardInfoDynamic
                class="tw-rounded-4xl border-gray-card-gray-1"
                :title="$t('Innovation')"
                :description="$t('We use innovative technologies to identify new ways to reach consumers and build enterprise resilience')"
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
                class="tw-rounded-4xl border-gray-card-gray-1"
                :title="$t('Funding')"
                :description="$t('Safeguard external financing for companys growth')"
                icon="circle-funding"
                icon-class="tw-text-blue-1"
              />
            </div>
            <div class="tw-flex-1 tw-basis-5/12 tw-w-1/2 xl:tw-basis-1/4">
              <!-- 4 -->
              <CardInfoDynamic
                class="tw-rounded-4xl border-gray-card-gray-1"
                :title="$t('Research')"
                :description="$t('We gather data and analytics to choose the right decision for our clients')"
                icon="circle-research"
                icon-class="tw-text-orange-1"
              />
            </div>
            <div class="tw-flex-1 tw-basis-5/12 xl:tw-basis-1/4">
              <!-- 5 -->
              <CardInfoDynamic
                class="tw-rounded-4xl border-gray-card-gray-1"
                :title="$t('Implementation')"
                :description="$t('Implement the best solutions for our projects to our clients')"
                icon="circle-implementation"
                icon-class="tw-text-blue-1"
              />
            </div>
            <!-- row 3 -->
            <div class="tw-relative tw-flex-1 tw-basis-5/12 xl:tw-basis-3/5">
              <!-- 6 -->
              <CardInfoDynamic
                class="tw-rounded-4xl border-gray-card-gray-1"
                :title="$t('Digital')"
                :description="$t('We are using the latest IT technologies to drive the organizations business')"
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
                class="tw-rounded-4xl border-gray-card-gray-1"
                :title="$t('Sustainability')"
                :description="$t('Connect companies and public organizations')"
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
              :title="$t('Strategy')"
              :description="$t('OU Primeligt Provides methodological expertise to help its clients capture growth opportunity')"
              icon="circle-strategy"
              icon-class="tw-text-orange-1"
            />
          </template>
          <template #test2>
            <CardInfoDynamic
              class="dynamic-info-card"
              :title="$t('Innovation')"
              :description="$t('We use innovative technologies to identify new ways to reach consumers and build enterprise resilience')"
              icon="circle-innovation"
              icon-class="tw-text-blue-1"
            />
          </template>

          <template #test3>
            <CardInfoDynamic
              class="dynamic-info-card"
              :title="$t('Funding')"
              :description="$t('Safeguard external financing for companys growth')"
              icon="circle-funding"
              icon-class="tw-text-blue-1"
            />
          </template>

          <template #test4>
            <CardInfoDynamic
              class="dynamic-info-card"
              :title="$t('Research')"
              :description="$t('We gather data and analytics to choose the right decision for our clients')"
              icon="circle-research"
              icon-class="tw-text-orange-1"
            />
          </template>
          <template #test5>
            <CardInfoDynamic
              class="dynamic-info-card"
              :title="$t('Implementation')"
              :description="$t('Implement the best solutions for our projects to our clients')"
              icon="circle-implementation"
              icon-class="tw-text-blue-1"
            />
          </template>
          <template #test6>
            <CardInfoDynamic
              class="dynamic-info-card"
              :title="$t('Digital')"
              :description="$t('We are using the latest IT technologies to drive the organizations business')"
              icon="circle-digital"
              icon-class="tw-text-orange-1"
            />
          </template>
          <template #test7>
            <CardInfoDynamic
              class="dynamic-info-card"
              :title="$t('Sustainability')"
              :description="$t('Connect companies and public organizations')"
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
      <Cooperation
        class="my-160px-240px-240px tw-bg-white"
        :title="$t('Interested In cooperation')"
      />
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

.border-gray-card-gray-1 {
  border: solid 1px #f4f4f4;
}
</style>