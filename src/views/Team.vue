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
    <section class="tw-px-20 tw-py-30">
      <!-- top -->
      <div class="topic-title tw-flex tw-justify-center tw-mb-20">
        <h2 class="tw-max-w-3xl tw-text-center">OÜ Primelight International senior team</h2>
      </div>
      <!-- bottom -->
      <div class="tw-flex tw-flex-wrap tw-gap-6 tw-text-sm">
        <VButtonRadio v-model="country" :items="countries" />
      </div>

      <!-- row 1 -->
      <div class="tw-flex tw-flex-wrap tw-mt-20 tw-gap-10">
        <!-- row 1 -->
        <TeamCard
          class="basis-333px tw-flex-grow tw-shrink"
          title="Adam Saulius Vaina"
          description="BOARD MEMBER"
          image="1"
        />
        <TeamCard
          class="basis-333px tw-flex-grow tw-shrink"
          title="Mikalai Koniukh"
          description="BOARD MEMBER"
          image="2"
        />
        <TeamCard
          class="basis-333px tw-flex-grow tw-shrink"
          title="Riivo Anton"
          description="ADVISOR"
          image="3"
        />
        <!-- row 2 -->
        <TeamCard
          class="basis-333px tw-flex-grow tw-shrink"
          title="Roman Khlibun"
          description="PROJECT MANAGER"
          image="4"
        />
        <TeamCard
          class="basis-333px tw-flex-grow tw-shrink"
          title="Alexandra Sferle"
          description="MARKETING MANAGER"
          image="5"
        />
        <TeamCard
          class="basis-333px tw-flex-grow tw-shrink"
          title="Gundega Ēlerte"
          description="HR MANAGER"
          image="6"
        />
      </div>
    </section>

    <!--
      --------
      @Section #2
      --------
    -->
    <section class="tw-bg-gray-4 tw-relative">
      <div class="tw-py-30 tw-relative tw-z-20">
        <ContactForm class="tw-bg-white tw-mx-20" />
      </div>
      <div class="tw-absolute tw-right-0 tw--top-20">
        <BgPatternContactForm />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Team',
  components: {
    PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    TeamCard: defineAsyncComponent(() => import("@/components/team/TeamCard.vue")),
    ContactForm: defineAsyncComponent(() => import("@/components/team/ContactForm.vue")),
    VButtonRadio: defineAsyncComponent(() => import("@/components/ui/VButtonRadio.vue")),
    BgPatternContactForm: defineAsyncComponent(() => import("@/components/patterns/BgPatternContactForm.vue")),
  },
  setup() {
    const countries = [
      'INTERNATIONAL',
      'ESTONIA',
      'LITHUANIA',
      'LATVIA',
      'FINLAND',
      'DENMARK',
      'POLAND',
      'SLOVAKIA',
      'UKRAINE',
      'ROMANIA',
      'MOLDOVA',
      'RUSSIA',
      'BELARUS',
      'SERBIA',
      'BULGARIA',
      'NORTH MACEDONIA',
      'KOSOVO',
      'ARMENIA',
    ]


    const country = ref(countries[0])

    return {
      countries,
      country
    }
  },
});
</script>
