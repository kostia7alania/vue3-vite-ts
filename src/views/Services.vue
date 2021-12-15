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
            <VButton text="Learn more about" class="tw-mt-10" variant="blue" />
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
                class="min-w-400px tw-rounded-3xl"
                title="Strategy"
                description="Providing classical fact-based strategic management consulting"
                icon="circle-strategy-orange"
              />
              <div class="tw-relative tw-flex-1">
                <CardInfoDynamic
                  class="min-w-500px tw-rounded-3xl"
                  title="Innovation"
                  description="Helping corporations, start-ups and governments innovate"
                  icon="circle-innovation"
                />
                <div class="tw-absolute tw-top-0 tw-right-0">
                  <BgPatternInnovation class="tw-rounded-3xl" />
                </div>
              </div>
            </div>
            <!-- row 2 -->
            <div class="tw-flex tw-flex-wrap tw-mt-20 tw-gap-10">
              <CardInfoDynamic
                class="tw-flex-1 min-w-400px tw-rounded-3xl"
                title="Funding"
                description="Securing external financing for organization’s growth"
                icon="circle-funding"
              />
              <CardInfoDynamic
                class="tw-flex-1 min-w-400px tw-rounded-3xl"
                title="Research"
                description="Gathering and analyzing information to help our clients make the right decisions"
                icon="circle-research-orange"
              />
              <CardInfoDynamic
                class="tw-flex-1 min-w-400px tw-rounded-3xl"
                title="Implementation"
                description="Executing projects and initiatives together with our clients"
                icon="circle-implementation"
              />
            </div>
            <!-- row 3 -->
            <div class="tw-flex tw-flex-wrap tw-mt-20 tw-gap-10">
              <div class="tw-relative tw-flex-1">
                <CardInfoDynamic
                  class="tw-flex-1 min-w-500px tw-rounded-3xl"
                  title="Digital"
                  description="Using big-data and latest IT technologies to drive the organization’s digitalization"
                  icon="circle-digital-orange"
                />
                <div class="tw-absolute tw-top-0 tw-bottom-0 tw-right-0 tw-overflow-hidden">
                  <BgPatternDigital class="tw-rounded-3xl" />
                </div>
              </div>
              <CardInfoDynamic
                class="min-w-400px tw-rounded-3xl"
                title="Sustainability"
                description="Supporting companies and public organizations in the transformation"
                icon="circle-sustainability"
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
    <section class="tw-bg-gray-4 tw-relative">
      <div class="tw-py-16">
        <div class="tw-flex tw-justify-between tw-px-20 tw-gap-10">
          <!-- left -->
          <div class="tw-pt-20 tw-flex-1">
            <h2 class="topic-title">Where are we located?</h2>
            <div class="tw-pt-6 topic-description">
              <div>In nine years from its founding, OÜ Primelight became the leading management consultancy across the Baltics and Eastern Europe, employing over 350 consultants in 29 offices across 18 countries.</div>
              <div class="tw-mt-2">
                Our international headquarters are located in Tartu, Estonia. Other OÜ Primelight offices are spread across
                <span
                  v-for="country of 'Estonia, Latvia, Lithuania, Finland, Poland, Ukraine, Romania, Moldova, Russia, Belarus, Serbia, Slovakia, Bulgaria, North Macedonia, Denmark'.split(', ')"
                  :key="country"
                >
                  <span class="tw-text-orange-1">{{ country }}</span>,
                </span>
                <span class="tw-text-orange-1">Kosovo</span>
                and
                <span class="tw-text-orange-1">Armenia</span>
                with a sales offices in the
                <span
                  class="tw-text-orange-1"
                >United Kingdom</span>
                and
                <span class="tw-text-orange-1">Turkey</span>.
              </div>
              <div
                class="tw-mt-2"
              >We also conduct consulting and market research projects in countries beyond our home markets. Thousands of completed projects come from a flexible approach and international mindset, and they have ensured successful cooperation with clients in 40+ countries in Europe, Asia and Africa.</div>
            </div>
          </div>
          <!-- right -->
          <div class="tw-flex tw-flex-wrap tw-flex-1 tw-gap-10 tw-pt-12">
            <WorldMap class="world-map tw-translate-x-20" />
          </div>
        </div>
      </div>
      <div class="tw-absolute tw-left-0 tw-bottom-0">
        <BgPatternLocated />
      </div>
    </section>

    <!--
      --------
      @Section #4
      -------- 
      Who should join our team?
    -->
    <section class="tw-my-30">
      <div class="tw-flex tw-flex-wrap tw-gap-x-6 tw-gap-y-10 tw-mx-20">
        <!-- card #1 -->
        <div class="basis-333px tw-grow-1 tw-bg-orange-1 tw-text-white tw-p-8 tw-rounded-3xl">
          <div class="tw-font-semibold tw-text-2xl tw-leading-6">Students and graduates</div>
          <div
            class="tw-mt-4 tw-text-sm tw-leading-6"
          >We are always looking for young talents from our local markets who want to develop professionally by doing meaningful projects in their home countries and internationally. If you are a student or a recent graduate, we offer various internship and entry-level positions that will best suit your needs.</div>
          <VButton
            class="tw-mt-9 w-244px"
            text="Apply now"
            variant="orange-2"
            width="100%"
            height="48px"
          />
        </div>
        <!-- card #2 -->
        <div class="basis-333px tw-grow-1 tw-text-white tw-rounded-3xl tw-relative">
          <img
            class="tw-w-full tw-rounded-3xl"
            src="@/assets/images/experienced-professionals.png"
            alt="Experienced professionals"
          />

          <div
            class="tw-w-full tw-h-full tw-absolute tw-z-10 tw-top-0 tw-rounded-3xl bg-gradient-blue-1"
          />

          <div
            class="tw-font-semibold tw-text-2xl tw-leading-6 tw-absolute tw-z-20 tw-bottom-0 tw-p-8"
          >
            <div class="max-w-200px tw-leading-8">Experienced professionals</div>
          </div>
        </div>

        <!-- card #3 -->
        <div class="tw-flex-1 tw-grow-1 tw--my-4 tw-pl-8 tw-rounded-3xl">
          <div class="tw-font-semibold tw-text-2xl tw-leading-6 tw-rounded-3xl">
            <h2 class="topic-title">Who should join our team?</h2>

            <div class="tw-mt-6 topic-description">
              <div
                class="tw-text-base topic-description"
              >Our success lies in the talented and passionate team of professionals who make OÜ Primelight a great place to work.</div>
              <div class="tw-font-semibold tw-text-xl tw-mt-6">The way we work:</div>

              <ul class="tw-mt-2 tw-ml-5 tw-text-base tw-font-medium tw-list-disc tw-leading-7">
                <li>International teams and projects</li>
                <li>Non-hierarchical work environment</li>
                <li>Impactful and meaningful projects</li>
                <li>Focus on employee growth and mentorship</li>
                <li>Competitive remuneration and training packages</li>
              </ul>
              <VButton
                class="tw-mt-10 tw-text-base tw-font-semibold"
                text="Apply now"
                variant="blue"
                width="244px"
                height="48px"
              />
            </div>
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
    <Cooperation class="tw-my-60 tw-bg-white tw-px-20" />

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
        <ArticleCard
          date="2021-10-11"
          title="Poland-based SAS Advisors is joining OÜ Primelight"
          button-variant="blue"
        />
        <ArticleCard
          date="2021-10-12"
          title="Poland-based SAS Advisors is joining OÜ Primelight"
          button-variant="blue"
          class="tw--translate-y-5"
        />
        <ArticleCard
          date="2021-10-13"
          title="Poland-based SAS Advisors is joining OÜ Primelight"
          button-variant="blue"
        />
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
    CardInfoDynamic: defineAsyncComponent(() => import("@/components/services/CardInfoDynamic.vue")),
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
    BgPatternChallenge: defineAsyncComponent(() => import("@/components/patterns/BgPatternChallenge.vue")),
    BgPatternInnovation: defineAsyncComponent(() => import("@/components/patterns/BgPatternInnovation.vue")),
    BgPatternDigital: defineAsyncComponent(() => import("@/components/patterns/BgPatternDigital.vue")),
    BgPatternLocated: defineAsyncComponent(() => import("@/components/patterns/BgPatternLocated.vue")),
    WorldMap: defineAsyncComponent(() => import("@/assets/icons/world-map.svg")),
    Cooperation: defineAsyncComponent(() => import("@/components/services/Cooperation.vue")),
    ArticleCard: defineAsyncComponent(() => import("@/components/articles/ArticleCard.vue")),
  }
});
</script>


<style lang="scss" scoped>
.world-map {
  max-height: 533px;
}
</style>