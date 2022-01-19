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
        <h2 class="tw-max-w-3xl tw-text-center">Primelight OU {{ $t('International senior team') }}</h2>
      </div>
      <!-- bottom -->
      <VCountries v-model:country="countryId" key-label="title" key-value="id" />

      <!-- row 1 -->
      <div class="tw-mt-20">
        <div v-if="teams.length" class="gap-16px-24px-40px tw-flex tw-flex-wrap">
          <!-- row 1 -->
          <TeamCard
            v-for="member of teams"
            :key="member.id"
            class="team-card"
            :title="member.name + ' ' + member.surname"
            :description="member.position"
            :avatar="member.avatar"
          />
        </div>
        <div v-else-if="isLoading" class="tw-flex tw-items-center tw-justify-center">
          <VIconSpinner class="tw-h-20" spin />
        </div>
        <div v-else>{{ $t('We have no colleagues in the selected country') }}</div>
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
import { computed, ComputedRef, defineAsyncComponent, defineComponent, onMounted, ref, watch, } from 'vue';
import { useRoute } from 'vue-router';


import TeamCard from "@/components/team/TeamCard.vue"
import VCountries from "@/components/ui/VCountries.vue"
import VIconSpinner from "@/components/ui/VIconSpinner.vue"
import { useVuex } from '@/store/store'

export default defineComponent({
  name: 'Team',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    VIconSpinner,
    VCountries,
    TeamCard,
    ContactForm: defineAsyncComponent(() => import("@/components/team/ContactForm.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    const store = useVuex()
    const route = useRoute();
    const queryCountryId = computed(() => route.query.countryId) as ComputedRef<string>

    const countryId = ref(1)

    watch(() => queryCountryId.value, () => {
      const cId = parseInt(queryCountryId.value)
      if (cId && !Number.isNaN(cId) && cId !== null) {
        countryId.value = cId
      }
    }, { immediate: true })


    // access an action
    const teams = computed(() => {
      const { teams } = store.state
      if (teams?.TEAMS) return teams.TEAMS.filter(team => team.country.id === countryId.value)
      return []
    })


    const isLoading = ref(false)

    // window.store = store
    const getTeams = async () => {
      isLoading.value = true
      try {
        await store.dispatch('teams/GET_TEAMS')
      } catch (err) {
        console.error({ err })
      } finally {
        isLoading.value = false
      }
    }

    onMounted(() => {
      emit('ready')
      getTeams()
    })

    watch(() => countryId.value, getTeams)


    const breakpoints = useBreakpoints(breakpointsTailwind)
    const md = breakpoints.smaller('md')


    return { md, teams, countryId, isLoading }
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