<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <section>
      <PageTopSection theme="orange">
        <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Careers</div>
      </PageTopSection>
    </section>

    <!--
      --------
      @Section #1
      -------- 
    -->
    <section class="tw-my-30 tw-px-20">
      <div class="topic-title tw-flex tw-justify-center tw-mb-20">
        <h2 class="tw-max-w-3xl tw-text-center">Working at OÜ Primelight</h2>
      </div>

      <div class="tw-flex tw-w-full tw-gap-x-10 tw-text-sm">
        <!-- card #1 -->
        <div class="tw-w-full h-640px">
          <CompanyCardInfoAnim
            title="Adventure"
            description="We value people who are not ordinary and who do not want to do everyday things. We are open to new experiences and challenging the status quo. It's never boring around here!"
            image="adventure"
            theme="blue"
            title-class="tw-text-2xl"
          />
        </div>
        <div class="tw-w-full tw-flex tw-flex-wrap tw-gap-x-10 tw-gap-y-14">
          <!-- card #2 -->
          <div class="basis-222px h-300px tw-shrink tw-grow">
            <CompanyCardInfoAnim
              title="Intellectual challenge"
              description="We are about learning on the job through a variety of intellectually challenging projects spanning various industries, functions, and geographies."
              image="intellectual-challenge"
              theme="blue"
              title-class="tw-text-2xl"
            />
          </div>
          <!-- card #3 -->
          <div class="basis-222px h-300px tw-shrink tw-grow">
            <CompanyCardInfoAnim
              title="Non - hierarchical organization"
              description="We value a high degree of responsibility and the importance of input from every employee from day one on the job. Everyone is expected to contribute to overall success."
              image="non-hierarchical-organization"
              theme="orange"
              title-class="tw-text-2xl"
            />
          </div>

          <!-- card #2 -->
          <div class="basis-222px h-300px tw-shrink tw-grow">
            <CompanyCardInfoAnim
              title="Flexibility"
              description="We seek to balance getting the job done with employees’ lives outside work, creating the possibilities to combine studies, entrepreneurial activities, hobbies, sports, and family life."
              image="flexibility"
              theme="orange"
              title-class="tw-text-2xl"
            />
          </div>
          <!-- card #3 -->
          <div class="basis-222px h-300px tw-shrink tw-grow">
            <CompanyCardInfoAnim
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
    <section class="tw-my-60">
      <WhoJoinToTeam />
    </section>

    <!--
      --------
      @Section #3
      --------
      Our latest articles
      --------
    -->
    <section class="tw-pb-60 tw-px-20 tw-relative">
      <h2 class="topic-title tw-max-w-sm tw-pr-20 tw-my-20">Stories of our people</h2>
      <div class="tw-flex tw-flex-wrap tw-gap-10 tw-relative tw-z-20">
        <ArticleCard
          class="tw-flex-1"
          date="2021-10-30"
          title="OÜ Primelight Challengers - Oleksandr Volik"
        />
        <ArticleCard
          class="tw-flex-1"
          date="2021-10-26"
          title="OÜ Primelight Challengers - Maari Helilaid"
        />
        <ArticleCard
          class="tw-flex-1"
          date="2021-10-09"
          title="OÜ Primelight Challengers - Sevak Hovhannisyan"
        />
      </div>
      <div class="tw-absolute tw--bottom-20 tw-left-0">
        <BgPatternStoriesOfOurPeople />
      </div>
    </section>

    <!--
      --------
      @Section #4
      -------- 
    -->
    <section class="tw-my-30 tw-px-20">
      <div class="tw-mb-20">
        <div class="topic-title tw-flex tw-justify-center tw-mb-6">
          <h2 class="tw-max-w-3xl tw-text-center">Working at OÜ Primelight</h2>
        </div>
        <div class="topic-description tw-flex tw-justify-center tw-mb-20">
          <div
            class="tw-max-w-3xl tw-text-center"
          >We truly believe that our success lies in the talented and passionate team of professionals who make CIVITTA a great place to work. We encourage our personnel to seek adventure in everything they do and help them to achieve their professional and personal goals.</div>
        </div>
      </div>
      <div class="tw-flex tw-gap-15">
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
    <section class="tw-bg-gray-4 tw-relative tw-px-20">
      <div class="tw-mt-20 tw-relative tw-z-20">
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
      <div class="tw-relative tw-z-20 tw-pt-20 tw-pb-35">
        <ContactFormCareer class="tw-bg-white" />
      </div>
      <div class="tw-absolute tw-right-0 tw--top-20">
        <BgPatternSearchCareerOpportunities />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'Careers',
  components: {
    PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    CompanyCardInfoAnim: defineAsyncComponent(() => import('@/components/company/CompanyCardInfoAnim.vue')),
    WhoJoinToTeam: defineAsyncComponent(() => import("@/components/services/WhoJoinToTeam.vue")),
    ArticleCard: defineAsyncComponent(() => import("@/components/articles/ArticleCard.vue")),
    BgPatternStoriesOfOurPeople: defineAsyncComponent(() => import("@/components/patterns/BgPatternStoriesOfOurPeople.vue")),
    ContactFormCareer: defineAsyncComponent(() => import("@/components/careers/ContactFormCareer.vue")),
    BgPatternSearchCareerOpportunities: defineAsyncComponent(() => import("@/components/patterns/BgPatternSearchCareerOpportunities.vue")),
  },
  setup() {
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
    return { consultingCol1, consultingCol2 }
  },
});
</script>

<style lang="scss" scoped >
.h-640px {
  height: 640px;
}
.basis-222px {
  flex-basis: 222px;
}
.h-300px {
  height: 300px;
}
</style>