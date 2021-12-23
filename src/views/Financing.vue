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
    <section class="tw-relative tw-bg-gray-4">
      <div class="tw-px-20 tw-py-30 tw-gap-10 tw-z-10 tw-relative">
        <!-- title -->
        <div class="topic-title tw-mb-20">
          <h2
            class="tw-font-semibold tw-text-5xl tw-leading-tight tw-max-w-3xl"
          >International financing opportunities</h2>
        </div>
        <!-- rows -->
        <div class="tw-bg-white tw-rounded-4xl">
          <CardInfoDynamicHorizontal
            v-for="opportunity of opportunities"
            :key="opportunity.title"
            :title="opportunity.title"
            :description="opportunity.description"
          />
        </div>
      </div>
      <div class="tw-absolute tw-right-0 tw-bottom-0 tw-z-0">
        <BgPatternServicesProvide />
      </div>
    </section>

    <!--
      --------
      @Section #2
      --------
      National financing opportunities
      --------
    -->
    <section class="tw-my-60 tw-px-20">
      <div class="tw-flex tw-justify-center tw-mb-20">
        <h2 class="topic-title tw-max-w-3xl tw-text-center">National financing opportunities</h2>
      </div>
      <!-- cards -->
      <div class="tw-flex tw-gap-x-18 tw-gap-y-22">
        <div class="tw-flex tw-flex-col tw-gap-y-22 tw-flex-1 basis-444px">
          <NationalCard
            class="tw-h-78"
            title="Programs in Estonia"
            description="Local programs in Estonia for applied research in smart specialization growth areas, product development, digital diagnostics, enterprise development, innovation voucher, development voucher, and large investor support."
            image="estonia"
          />

          <NationalCard
            class="tw-h-78"
            title="Programs in Latvia"
            description="Local programs in Latvia for new products and technologies development in competence centers and innovation vouchers."
            image="latvia"
          />
        </div>

        <div class="tw-flex tw-flex-col tw-gap-y-22 tw-flex-1 basis-444px tw-translate-y-12">
          <NationalCard
            class="tw-h-78"
            title="Programs in Lithuania"
            description="Local programs in Lithuania for industry digitization, eco-innovations, green industry innovation, and ICT."
            image="lithuania"
          />

          <NationalCard
            class="tw-h-78"
            title="Programs in Romania"
            description="Local programs in Romania for innovative green, blue and ICT technologies, products, processes, and solutions."
            image="romania"
          />
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
    <section class="tw-my-60 tw-mx-20">
      <Cooperation title="Interested In cooperation?" />
    </section>

    <!--
      --------
      @Section #4
      --------
      Case studies
      --------
    -->
    <section class="tw-my-60 tw-px-20">
      <h2 class="topic-title max-w-400px tw-my-20">Case studies</h2>
      <div class="tw-flex tw-flex-wrap tw-gap-10">
        <ArticleCard date="2021-10-11" title="Poland-based SAS Advisors is joining OÜ Primelight" />
        <ArticleCard date="2021-10-12" title="Poland-based SAS Advisors is joining OÜ Primelight" />
        <ArticleCard date="2021-10-13" title="Poland-based SAS Advisors is joining OÜ Primelight" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted } from 'vue';

import CardInfoDynamicHorizontal from "@/components/services2/CardInfoDynamicHorizontal.vue"

export default defineComponent({
  name: 'Financing',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    NationalCard: defineAsyncComponent(() => import("@/components/financing/NationalCard.vue")),
    CardInfoDynamicHorizontal,
    BgPatternServicesProvide: defineAsyncComponent(() => import("@/components/patterns/BgPatternServicesProvide.vue")),
    Cooperation: defineAsyncComponent(() => import("@/components/services/Cooperation.vue")),
    ArticleCard: defineAsyncComponent(() => import("@/components/articles/ArticleCard.vue")),
  },
   emits: ['ready'],
  setup(_, { emit }) {
    onMounted(() => emit('ready'))

    const opportunities = [
      {
        title: 'Horizon Europe',
        description: 'Horizon Europe supports large international consortiums composing of R&D, industry, policy and societal stakeholders in producing world-class science and technology, improving industrial leadership and solving societal challenges of Europe by funding research, development and innovation.',
      },
      {
        title: 'European Innovation',
        description: 'EIC supports highly innovative SMEs and start-ups in developing ground-breaking business ideas further into market-ready products, service or processes by financing advanced prototyping, validation, trials, demonstration, testing, certification and commercialization.',
      },

      {
        title: 'Cascade Funding',
        description: 'Cascade funding opportunities are calls organized within H2020 projects to tech start-ups or scale-ups via acceleration, incubation and mentoring programs or for implementing pilots, demonstrations and experiments on a specific innovative technology or framework defined in the project.',
      },
      {
        title: 'Eit Innovation Comunities',
        description: 'The European Institute of Innovation and Technology supports the creation and fining of innovative solutions to major societal challenges through training and education programs, development of innovative products and services and powering startups and scale-ups.',
      },
      {
        title: 'Erasmus+',
        description: 'Erasmus+ supports education, training, youth and sport organisations by financing collaboration in the fields of academic and vocational training, schools, adult learning, European sport events, teaching, research, networking and policy debate on EU topics.',
      },
      {
        title: 'Creative Europe',
        description: 'Creative Europe supports the audiovisual, cultural and creative players by financing their operations across Europe in order to reach new audiences and to develop the skills needed in the digital age.',
      },
      {
        title: 'Life +',
        description: 'LIFE+ supports private bodies, public entities and NGOs in the environment and climate field by financing technology development, strategies and policy development aimed at ensuring nature conservation, biodiversity, environment and resource efficiency, climate change mitigation and adaptation.',
      },
      {
        title: 'Innovation Fund',
        description: 'Innovation Fund supports innovation in the fields of energy-intensive industries; renewables; energy storage; carbon capture, use and storage. The aim of the fund is to support investments in the next generation of technologies needed for EU‘s low-carbon transition as well as boost the growth and competitiveness of EU companies.',
      },


    ]

    return { opportunities }
  },
});
</script>