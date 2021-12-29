<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <!--     
      <section>
      <PageTopSection theme="orange" class="min-h-400px">
      <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Careers</div>
      </PageTopSection>
      </section>
    -->

    <!--
      --------
      @Section #1
      -------- 
    -->
    <section class="my-80px-104px-120px px-16px-48px-80px">
      <div class="topic-title tw-flex tw-justify-center">
        <h2 class="tw-max-w-3xl lg:tw-text-center">Working at OÜ Primelight</h2>
      </div>

      <div
        class="gap-16px-24px-40px mt-60px-80px-80px tw-flex tw-flex-col xl:tw-flex-row tw-w-full tw-text-sm"
      >
        <!-- card #1 -->
        <div class="tw-w-full tw-h-[354px] xl:tw-h-[640px]">
          <CardInfoAnim
            title="Adventure"
            description="We value people who are not ordinary and who do not want to do everyday things. We are open to new experiences and challenging the status quo. It's never boring around here!"
            image="adventure"
            theme="blue"
            title-class="tw-text-2xl"
          />
        </div>
        <div class="gap-16px-24px-40px tw-w-full tw-flex tw-flex-wrap">
          <!-- card #2 -->
          <div class="work-card-secondary">
            <CardInfoAnim
              title="Intellectual challenge"
              description="We are about learning on the job through a variety of intellectually challenging projects spanning various industries, functions, and geographies."
              image="intellectual-challenge"
              theme="blue"
              title-class="tw-text-2xl"
            />
          </div>
          <!-- card #3 -->
          <div class="work-card-secondary">
            <CardInfoAnim
              title="Non - hierarchical organization"
              description="We value a high degree of responsibility and the importance of input from every employee from day one on the job. Everyone is expected to contribute to overall success."
              image="non-hierarchical-organization"
              theme="orange"
              title-class="tw-text-2xl"
            />
          </div>

          <!-- card #2 -->
          <div class="work-card-secondary">
            <CardInfoAnim
              title="Flexibility"
              description="We seek to balance getting the job done with employees’ lives outside work, creating the possibilities to combine studies, entrepreneurial activities, hobbies, sports, and family life."
              image="flexibility"
              theme="orange"
              title-class="tw-text-2xl"
            />
          </div>
          <!-- card #3 -->
          <div class="work-card-secondary">
            <CardInfoAnim
              title="Fun"
              description="AtOÜ Primelight , we provide an enjoyable working atmosphere, social events, offsite sessions and trips abroad for the whole company."
              image="fun"
              theme="blue"
              title-class="tw-text-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!--
      --------
      @Section #2
      -------- 
      Who should join our team?
    -->
    <section
      class="py-80px-104px-120px tw-bg-gray-4"
      :class="{
        'bg-should-join-xl': !sm,
        'bg-should-join-sm': sm,
      
      }"
    >
      <WhoJoinToTeam />
    </section>

    <!--
      --------
      @Section #3
      --------
      Our latest articles
      --------
    -->
    <section
      class="px-16px-48px-80px tw-pb-20 md:tw-pb-20 xl:tw-pb-60"
      :class="{
        'bg-stories-of-our-people-xl': !sm
      }"
    >
      <h2 class="topic-title lg:tw-max-w-sm lg:tw-pr-20 my-40px-80px">Stories of our people</h2>
      <div v-if="!sm" class="tw-flex tw-flex-wrap tw-gap-10">
        <ArticleCardOld
          class="tw-flex-1"
          date="2021-10-30"
          title="OÜ Primelight Challengers - Oleksandr Volik"
        />
        <ArticleCardOld
          class="tw-flex-1"
          date="2021-10-26"
          title="OÜ Primelight Challengers - Maari Helilaid"
        />
        <ArticleCardOld
          class="tw-flex-1"
          date="2021-10-09"
          title="OÜ Primelight Challengers - Sevak Hovhannisyan"
        />
      </div>
      <CardsSwiper v-else>
        <!-- MOBILE -->
        <template #test1>
          <ArticleCardOld
            class="article-card-swiper"
            date="2021-10-11"
            title="Poland-based SAS Advisors is joining OÜ Primelight"
          />
        </template>
        <template #test2>
          <ArticleCardOld
            class="article-card-swiper"
            date="2021-10-12"
            title="Poland-based SAS Advisors is joining OÜ Primelight"
          />
        </template>
        <template #test3>
          <ArticleCardOld
            class="article-card-swiper"
            date="2021-10-13"
            title="Poland-based SAS Advisors is joining OÜ Primelight"
          />
        </template>
      </CardsSwiper>
    </section>

    <!--
      --------
      @Section #4
      -------- 
    -->
    <section class="pb-80px-160px-240px px-16px-48px-80px">
      <div class="topic-title tw-flex tw-justify-center tw-mb-6">
        <h2 class="tw-max-w-3xl lg:tw-text-center">Consulting career path at OÜ Primelight</h2>
      </div>
      <div class="topic-description tw-flex tw-justify-center tw-mb-20">
        <div
          class="tw-max-w-3xl lg:tw-text-center"
        >We truly believe that our success lies in the talented and passionate team of professionals who make CIVITTA a great place to work. We encourage our personnel to seek adventure in everything they do and help them to achieve their professional and personal goals.</div>
      </div>
      <div class="mt-60px-80px-80px tw-flex tw-flex-col lg:tw-flex-row tw-gap-15">
        <div class="tw-flex tw-flex-col tw-flex-1 tw-gap-15">
          <div v-for="col of consultingCol1" :key="col.title">
            <div class="topic-title-28px">{{ col.title }}</div>
            <div class="topic-description tw-mt-6">{{ col.description }}</div>
          </div>
        </div>
        <div class="tw-flex tw-flex-col tw-flex-1 tw-gap-15">
          <div v-for="col of consultingCol2" :key="col.title">
            <div class="topic-title-28px">{{ col.title }}</div>
            <div class="topic-description tw-mt-6">{{ col.description }}</div>
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
      class="tw-bg-gray-4 px-16px-48px-80px"
      :class="{
        'bg-contacts-sm': md,
        'bg-contacts-xl': !md,
      }"
    >
      <div class="pt-80px-120px-120px">
        <div class="topic-title tw-flex tw-justify-center tw-mb-6">
          <h2 class="tw-max-w-xl tw-text-center">Searching for new career opportunities?</h2>
        </div>
        <div class="topic-description tw-flex tw-justify-center">
          <div class="tw-max-w-3xl tw-text-center">
            Apply now and build your career in OÜ Primelight, gain international experience and make an impact. Fill in the application form. Our team will review it and contact you. For any questions regarding your application, send an email to
            <a
              class="tw-text-blue-1"
              href="mailto:adventure@OÜ Primelight.com"
            >adventure@OÜ Primelight.com</a>
          </div>
        </div>
      </div>

      <div class="tw-pt-20 tw-pb-35">
        <ContactFormCareer class="tw-bg-white" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineAsyncComponent, defineComponent, onMounted } from 'vue';

import CardInfoAnim from '@/components/services/CardInfoAnim.vue'

export default defineComponent({
  name: 'Careers',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    CardInfoAnim,
    WhoJoinToTeam: defineAsyncComponent(() => import("@/components/services/WhoJoinToTeam.vue")),
    ArticleCardOld: defineAsyncComponent(() => import("@/components/articles/ArticleCardOld.vue")),
    ContactFormCareer: defineAsyncComponent(() => import("@/components/careers/ContactFormCareer.vue")),
    CardsSwiper: defineAsyncComponent(() => import("@/components/services/CardsSwiper.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    onMounted(() => emit('ready'))

    const consultingCol1 = [
      { title: '1. Partner', description: 'Intellectual leader with deep expertise in some particular industry and/or service line and own client portfolio' },
      { title: '3. Project manager / Team lead', description: 'Full-responsibility over project execution ensuring that it is delivered on time within high quality and budget expectations' },
      { title: '2. Associate partner', description: 'Leads several teams with growing role in mentorship of other colleagues and business development' }
    ]
    const consultingCol2 = [
      { title: '4. Senior analyst / Senior consultant', description: 'Works more closely with client team members and owns a particular stream in the project, such as performing operational analysis, market research, financial model, etc.' },
      { title: '5. Analyst / Consultant', description: 'Performs larger and more sophisticated tasks, including data analysis and visualization, formulating and testing hypotheses, etc.' },
      { title: '6. Junior analyst / Junior consultant', description: 'Supports the team with market research, analysis, data collection, generation of ideas and other daily tasks' }
    ]

    const breakpoints = useBreakpoints(breakpointsTailwind)
    const sm = breakpoints.smaller('sm')
    const md = breakpoints.smaller('md')

    return { consultingCol1, consultingCol2, sm, md }
  },
});
</script>

<style lang="scss" scoped >
.work-card-secondary {
  @apply tw-basis-full md:tw-basis-5/12 xl:tw-basis-[222px] tw-h-[354px] xl:tw-h-[300px] tw-shrink tw-grow;
}
.bg-should-join-xl {
  background-image: url("@/assets/images/careers/bg-should-join-xl.png");
  background-repeat: no-repeat;
  background-position: top right;
}
.bg-should-join-sm {
  background-image: url("@/assets/images/careers/bg-should-join-sm.png");
  background-repeat: no-repeat;
  background-position: top right;
}

.bg-stories-of-our-people-xl {
  background-image: url("@/assets/images/careers/bg-stories-of-our-people-xl.png");
  background-repeat: no-repeat;
  background-position: bottom left;
}


.bg-contacts-sm{
  background-image: url("@/assets/images/team/bg-contacts-sm.png");
  background-repeat: no-repeat;
  background-position: top;
}
.bg-contacts-xl {
  background-image: url("@/assets/images/team/bg-contacts-xl.png");
  background-repeat: no-repeat;
  background-position: top left;
} 
</style>