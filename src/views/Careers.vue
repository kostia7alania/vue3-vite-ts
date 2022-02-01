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
      <div class="max-layout-width">
        <div class="topic-title tw-flex tw-justify-center">
          <h2 class="tw-max-w-3xl lg:tw-text-center">{{ $t('Working at Primelight OU') }}</h2>
        </div>

        <div
          class="gap-16px-24px-40px mt-60px-80px-80px tw-flex tw-flex-col xl:tw-flex-row tw-w-full tw-text-sm"
        >
          <!-- card #1 -->
          <div class="tw-w-full tw-h-[354px] xl:tw-h-[640px]">
            <CardInfoAnim
              :title="$t('Adventure')"
              :description="$t('We value people who are not ordinary and who do not want to do everyday things')"
              image="adventure"
              theme="blue"
              title-class="tw-text-2xl"
            />
          </div>
          <div class="gap-16px-24px-40px tw-w-full tw-flex tw-flex-wrap">
            <!-- card #2 -->
            <div class="work-card-secondary">
              <CardInfoAnim
                :title="$t('Intellectual challenge')"
                :description="$t('We are about learning on the job through a variety of intellectually challenging projects')"
                image="intellectual-challenge"
                theme="blue"
                title-class="tw-text-2xl"
              />
            </div>
            <!-- card #3 -->
            <div class="work-card-secondary">
              <CardInfoAnim
                :title="$t('Non - hierarchical organization')"
                :description="$t('We value a high degree of responsibility and the importance of input from every employee from day one on the job')"
                image="non-hierarchical-organization"
                theme="orange"
                title-class="tw-text-2xl"
              />
            </div>

            <!-- card #2 -->
            <div class="work-card-secondary">
              <CardInfoAnim
                :title="$t('Flexibility')"
                :description="$t('We seek to balance getting the job done with employees')"
                image="flexibility"
                theme="orange"
                title-class="tw-text-2xl"
              />
            </div>
            <!-- card #3 -->
            <div class="work-card-secondary">
              <CardInfoAnim
                :title="$t('Fun')"
                :description="$t('At Primelight OU we provide an enjoyable working atmosphere')"
                image="fun"
                theme="blue"
                title-class="tw-text-2xl"
              />
            </div>
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
      class="tw-pb-20 md:tw-pb-20 xl:tw-pb-60"
      :class="{
        'bg-stories-of-our-people-xl': !sm
      }"
    >
      <LatestArticles :title="$t('Stories of our people')" category="Career stories" />
    </section>

    <!--
      --------
      @Section #4
      -------- 
    -->
    <section class="pb-80px-160px-240px px-16px-48px-80px">
      <div class="max-layout-width">
        <div class="topic-title tw-flex tw-justify-center tw-mb-6">
          <h2
            class="tw-max-w-3xl lg:tw-text-center"
          >{{ $t('Consulting career path at Primelight OU') }}</h2>
        </div>
        <div class="topic-description tw-flex tw-justify-center tw-mb-20">
          <div
            class="tw-max-w-3xl lg:tw-text-center"
          >{{ $t('We truly believe that our success lies in the talented and passionate team of professionals') }}</div>
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
      <div class="max-layout-width-overflow-auto">
        <div class="pt-80px-120px-120px">
          <div class="topic-title tw-flex tw-justify-center tw-mb-6">
            <h2
              class="tw-max-w-xl tw-text-center"
            >{{ $t('Searching for new career opportunities') }}</h2>
          </div>
          <div class="topic-description tw-flex tw-justify-center">
            <div class="tw-max-w-3xl tw-text-center">
              {{ $t('Apply now and build your career in Primelight OU') }}
              <a
                class="tw-text-blue-1"
                href="mailto:adventure@PrimelightOU.com"
              >adventure@PrimelightOU.com</a>
            </div>
          </div>
        </div>

        <div class="tw-pt-20 tw-pb-35">
          <ContactFormCareerAndContact class="tw-bg-white" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed, defineAsyncComponent, defineComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'

import CardInfoAnim from '@/components/services/CardInfoAnim.vue'

export default defineComponent({
  name: 'Careers',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    CardInfoAnim,
    WhoJoinToTeam: defineAsyncComponent(() => import("@/components/services/WhoJoinToTeam.vue")),
    ContactFormCareerAndContact: defineAsyncComponent(() => import("@/components/careers/ContactFormCareerAndContact.vue")),
    LatestArticles: defineAsyncComponent(() => import("@/components/services/LatestArticles.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    onMounted(() => emit('ready'))
    const { t } = useI18n({ useScope: 'global' });

    const consultingCol1 = computed(() => [
      { title: `1. ${t('Partner')}`, description: t('Intellectual leader with deep expertise in some particular industry and/or service line and own client portfolio') },
      { title: `3. ${t('Project manager / Team lead')}`, description: t('Full-responsibility over project execution ensuring that it is delivered on time within high quality and budget expectations') },
      { title: `2. ${t('Associate partner')}`, description: t('Leads several teams with growing role in mentorship of other colleagues and business development') }
    ])

    const consultingCol2 = computed(() => [
      { title: `4. ${t('Senior analyst / Senior consultant')}`, description: t('Works more closely with client team members and owns a particular stream') },
      { title: `5. ${t('Analyst / Consultant')}`, description: t('Performs larger and more sophisticated tasks') },
      { title: `6. ${t('Junior analyst / Junior consultant')}`, description: t('Supports the team with market research') }
    ])

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

.bg-contacts-sm {
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