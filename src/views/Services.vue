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
    <section class="tw-bg-gray-4 tw-relative">
      <div class="tw-py-30">
        <div class="tw-flex tw-justify-between tw-px-20 tw-gap-10">
          <!-- left -->
          <div class="tw-pt-20 tw-flex-1">
            <div class="topic-title">OÜ Primelight - The Challengeʳ Advisory</div>
            <div class="tw-pt-6 topic-description">
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
          <div class="tw-flex tw-flex-wrap tw-flex-1 tw-gap-10">
            <div class="tw-flex tw-flex-col tw-mt-20 tw-gap-10">
              <CardInfo number="18" label="National branches" icon="branches" />
              <CardInfo number="29" label="Offices" icon="consultations" />
            </div>
            <div class="tw-flex tw-flex-col tw-gap-10">
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
    -->
    <section class="tw-relative">
      <div class="tw-py-30">
        <div class="tw-px-20 tw-gap-10">
          <!-- top -->
          <div class="tw-flex tw-justify-between tw-gap-10">
            <div class="tw-flex-1 topic-title">What do we do?</div>
            <div
              class="tw-flex-1 topic-description"
            >OÜ Primelight provides management consulting and data analytics services to corporations, start-ups, SMEs, governments and NGOs, delivering great value for money price point. We offer a full spectrum of management consulting services: strategy, innovation, funding, research, digital and implementation.</div>
          </div>
          <!-- bottom -->
          <div class="tw-gap-10">
            <!-- row 1 -->
            <div class="tw-flex tw-flex-wrap tw-mt-20 tw-gap-10">
              <CardInfoDynamic
                class="min-w-400px tw-rounded-4xl"
                title="Strategy"
                description="Providing classical fact-based strategic management consulting"
                icon="circle-strategy"
                icon-class="tw-text-orange-1"
              />
              <div class="tw-relative tw-flex-1">
                <CardInfoDynamic
                  class="min-w-500px tw-rounded-4xl"
                  title="Innovation"
                  description="Helping corporations, start-ups and governments innovate"
                  icon="circle-innovation"
                  icon-class="tw-text-blue-1"
                />
                <div class="tw-absolute tw-top-0 tw-right-0">
                  <BgPatternInnovation class="tw-rounded-4xl" />
                </div>
              </div>
            </div>
            <!-- row 2 -->
            <div class="tw-flex tw-flex-wrap tw-mt-20 tw-gap-10">
              <CardInfoDynamic
                class="tw-flex-1 min-w-400px tw-rounded-4xl"
                title="Funding"
                description="Securing external financing for organization’s growth"
                icon="circle-funding"
                icon-class="tw-text-blue-1"
              />
              <CardInfoDynamic
                class="tw-flex-1 min-w-400px tw-rounded-4xl"
                title="Research"
                description="Gathering and analyzing information to help our clients make the right decisions"
                icon="circle-research"
                icon-class="tw-text-orange-1"
              />
              <CardInfoDynamic
                class="tw-flex-1 min-w-400px tw-rounded-4xl"
                title="Implementation"
                description="Executing projects and initiatives together with our clients"
                icon="circle-implementation"
                icon-class="tw-text-blue-1"
              />
            </div>
            <!-- row 3 -->
            <div class="tw-flex tw-flex-wrap tw-mt-20 tw-gap-10">
              <div class="tw-relative tw-flex-1">
                <CardInfoDynamic
                  class="tw-flex-1 min-w-500px tw-rounded-4xl"
                  title="Digital"
                  description="Using big-data and latest IT technologies to drive the organization’s digitalization"
                  icon="circle-digital"
                  icon-class="tw-text-orange-1"
                />
                <div class="tw-absolute tw-top-0 tw-bottom-0 tw-right-0 tw-overflow-hidden">
                  <BgPatternDigital class="tw-rounded-4xl" />
                </div>
              </div>
              <CardInfoDynamic
                class="min-w-400px tw-rounded-4xl"
                title="Sustainability"
                description="Supporting companies and public organizations in the transformation"
                icon="circle-sustainability"
                icon-class="tw-text-blue-1"
              />
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
    <WhereWeLocated class="tw-bg-gray-4 tw-py-16" />

    <!--
      --------
      @Section #4
      -------- 
      Who should join our team?
    -->
    <section class="tw-my-30">
      <WhoJoinToTeam is-shown-button />
    </section>

    <!--
      --------
      @Section #5
      --------
      Interested In cooperation?
      --------
    -->
    <Cooperation class="tw-my-60 tw-bg-white tw-mx-20" title="Interested In cooperation?" />

    <!--
      --------
      @Section #9
      --------
      Our latest articles
      --------
    -->
    <section class="tw-my-60 tw-px-20">
      <h2 class="topic-title max-w-400px tw-my-20">Our latest articles</h2>
      <div class="tw-flex tw-flex-wrap tw-gap-10">
        <ArticleCard date="2021-10-11" title="Poland-based SAS Advisors is joining OÜ Primelight" />
        <ArticleCard date="2021-10-12" title="Poland-based SAS Advisors is joining OÜ Primelight" />
        <ArticleCard date="2021-10-13" title="Poland-based SAS Advisors is joining OÜ Primelight" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'Services',
  components: {
    ServiceSwipper: defineAsyncComponent(() => import("@/components/services/ServiceSwipper.vue")),
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
  }
});
</script>


<style lang="scss" scoped>
.world-map {
  max-height: 533px;
}
</style>