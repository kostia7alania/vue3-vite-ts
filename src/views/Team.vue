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
      <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Team</div>
      <div
      class="tw-text-lg tw-font-medium tw-leading-7 tw-max-w-5xl"
      >Our team of 350+ consultants and 150+ software developers is led by Partners and Managers. These individuals working across 18 countries combine strong educational credentials, intellectual curiosity, proven leadership capacity and commitment to values.</div>
      </PageTopSection>
      </section>
    -->

    <!--
      --------
      @Section #1
      --------
    -->
    <section class="px-16px-48px-80px py-80px-104px-120px">
      <!-- top -->
      <div class="topic-title tw-flex tw-justify-center tw-mb-20">
        <h2 class="tw-max-w-3xl tw-text-center">OÜ Primelight International senior team</h2>
      </div>
      <!-- bottom -->
      <VCountries v-model:country="country" key-label="title" key-value="id" />

      <!-- row 1 -->
      <div class="gap-16px-24px-40px tw-flex tw-flex-wrap tw-mt-20">
        <!-- row 1 -->
        <TeamCard
          v-for="member of teams.TEAMS"
          :key="member.id"
          class="team-card"
          :title="member.name + ' ' + member.surname"
          :description="member.position"
          :avatar="member.avatar"
        />
        <!-- <TeamCard class="team-card" title="Mikalai Koniukh" description="BOARD MEMBER" image="2" /> -->
        <!-- <TeamCard class="team-card" title="Riivo Anton" description="ADVISOR" image="3" /> -->
        <!-- row 2 -->
        <!-- <TeamCard class="team-card" title="Roman Khlibun" description="PROJECT MANAGER" image="4" /> -->
        <!-- <TeamCard
          class="team-card"
          title="Alexandra Sferle"
          description="MARKETING MANAGER"
          image="5"
        />
        <TeamCard class="team-card" title="Gundega Ēlerte" description="HR MANAGER" image="6" />-->
      </div>
    </section>

    <!--
      --------
      @Section #2
      --------
    -->
    <section
      class="tw-bg-gray-4"
      :class="{
        'bg-contacts-sm': md,
        'bg-contacts-xl': !md,
      }"
    >
      <div class="tw-py-30 px-16px-48px-80px">
        <ContactForm class="tw-bg-white" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">


import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineAsyncComponent, defineComponent, onMounted, ref, } from 'vue';

import TeamCard from "@/components/team/TeamCard.vue"
import VCountries from "@/components/ui/VCountries.vue"
import { useVuex } from '@/store/store'

export default defineComponent({
  name: 'Team',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    VCountries,
    TeamCard,
    ContactForm: defineAsyncComponent(() => import("@/components/team/ContactForm.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    const store = useVuex()

    // access an action
    const teams = store.state.teams
    // window.store = store
    const getTeams = () => store.dispatch('teams/GET_TEAMS')
    onMounted(() => {
      emit('ready')
      getTeams()
    })


    const breakpoints = useBreakpoints(breakpointsTailwind)
    const md = breakpoints.smaller('md')

    const country = ref(null)

    return { md, teams, country }
  },
});
</script>


<style lang="scss" scoped>
.team-card {
  @apply tw-basis-[222px] md:tw-basis-[280px] xl:tw-basis-[333px] tw-flex-grow tw-shrink;
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