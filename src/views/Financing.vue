<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <!--
      <section>
      <PageTopSection theme="blue">
      <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Financing</div>
      <div
      class="tw-text-lg tw-font-medium tw-leading-7 tw-max-w-5xl"
      >Funding programs are an important source of finance during the time of economic uncertainty and additional fuel to finance business activities and societal processes at any time. EU funding programmes are designed to support research, development and innovation and advancement of specific societal priorities (environment and climate actions, audio-visual, cultural and creative sectors, education, training, youth and sports initiatives, etc).</div>
      </PageTopSection>
      </section>
    -->

    <!--
      --------
      @Section #1
      --------
    -->
    <section class="bg-opportunities tw-relative tw-bg-gray-4">
      <div class="max-layout-width-overflow-auto py-80px-120px-120px">
        <!-- title -->
        <div class="px-16px-48px-80px tw-gap-10">
          <div class="topic-title">
            <h2
              class="tw-font-semibold tw-text-5xl tw-leading-tight tw-max-w-3xl"
            >{{ $t('International financing opportunities') }}</h2>
          </div>
          <!-- rows -->
          <div class="lg:tw-bg-white tw-rounded-4xl mt-60px-80px-80px">
            <CardInfoDynamicHorizontal
              v-for="opportunity of opportunities"
              :key="opportunity.title"
              :title="opportunity.title"
              :description="opportunity.description"
            />
          </div>
        </div>
      </div>
    </section>

    <!--
      --------
      @Section #2
      --------
      National financing opportunities
      --------
    -->
    <section class="max-layout-width-overflow-auto my-80px-160px-240px ">
      <div class="px-16px-48px-80px">
        <div class="tw-flex tw-justify-center tw-mb-20">
          <h2
            class="topic-title tw-max-w-3xl tw-text-center"
          >{{ $t('National financing opportunities') }}</h2>
        </div>
        <!-- cards -->
        <div class="tw-flex tw-flex-col xl:tw-flex-row tw-gap-x-18 tw-gap-y-10 xl:tw-gap-y-22">
          <div class="tw-basis-[444px] tw-flex tw-flex-col tw-gap-y-10 xl:tw-gap-y-22 tw-flex-1">
            <NationalCard
              class="xl:tw-h-78"
              :title="$t('Programs in Estonia')"
              :description="$t('Local programs in Estonia for applied research in smart specialization growth areas')"
              image="estonia"
            />

            <NationalCard
              class="xl:tw-h-78"
              :title="$t('Programs in Latvia')"
              :description="$t('Local programs in Latvia for new products and technologies development in competence centers and innovation vouchers')"
              image="latvia"
            />
          </div>

          <div
            class="tw-basis-[444px] tw-flex tw-flex-col tw-gap-y-10 xl:tw-gap-y-22 tw-flex-1 xl:tw-translate-y-12"
          >
            <NationalCard
              class="xl:tw-h-78"
              :title="$t('Programs in Lithuania')"
              :description="$t('Local programs in Lithuania for industry digitization')"
              image="lithuania"
            />

            <NationalCard
              class="xl:tw-h-78"
              :title="$t('Programs in Romania')"
              :description="$t('Local programs in Romania for innovative green')"
              image="romania"
            />
          </div>
        </div>
      </div>
    </section>

    <!--
      --------
      @Section #3
      --------
      Interested In cooperation?
      --------
    -->
    <section class="my-80px-160px-240px px-16px-48px-80px">
      <Cooperation :title="$t('Interested In cooperation')" />
    </section>

    <!--
      --------
      @Section #4
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
import { computed, defineAsyncComponent, defineComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'

import CardInfoDynamicHorizontal from "@/components/services2/CardInfoDynamicHorizontal.vue"

export default defineComponent({
  name: 'Financing',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    NationalCard: defineAsyncComponent(() => import("@/components/financing/NationalCard.vue")),
    CardInfoDynamicHorizontal,
    Cooperation: defineAsyncComponent(() => import("@/components/services/Cooperation.vue")),
    LatestArticles: defineAsyncComponent(() => import("@/components/services/LatestArticles.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    const { t } = useI18n({ useScope: 'global' });

    onMounted(() => emit('ready'))
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const sm = breakpoints.smaller('sm')

    const opportunities = computed(() => [
      { title: t('Horizon Europe'), description: t('Horizon Europe supports large international consortiums composing'), },
      { title: t('European Innovation'), description: t('EIC supports highly innovative SMEs and start-ups in developing ground-breaking business ideas'), },
      { title: t('Cascade Funding'), description: t('Cascade funding opportunities are calls organized within H2020 projects to tech start-ups or scale-ups via acceleration'), },
      { title: t('Eit Innovation Communities'), description: t('The European Institute of Innovation and Technology supports the creation and fining of innovative solutions'), },
      { title: t('Erasmus'), description: t('Erasmus supports education'), },
      { title: t('Creative Europe'), description: t('Creative Europe supports the audiovisual'), },
      { title: t('Life'), description: t('LIFE supports private bodies public entities and NGOs in the environment and climate field'), },
      { title: t('Innovation Fund'), description: t('Innovation Fund supports innovation in the fields of energy-intensive industries'), },
    ])

    return { opportunities, sm }
  },
});
</script>

<style lang="scss" scoped>
.bg-opportunities {
  background-image: url("@/assets/images/financing/bg-opportunities.png");
  background-repeat: no-repeat;
  background-position: bottom right;
}
</style>