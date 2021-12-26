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
      <div class="tw-font-semibold tw-text-6xl tw-leading-tight tw-mt-11 tw-mb-26">Contact us</div>
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
      <TagsToggle />

      <!-- bottom  -->
      <div class="topic-title tw-flex tw-justify-center tw-my-20">
        <h2 class="tw-max-w-3xl lg:tw-text-center">OÜ Primelight International</h2>
      </div>

      <!-- row 1 -->
      <div class="tw-flex tw-flex-wrap tw-justify-center tw-mt-20 tw-gap-10">
        <!-- col left -->
        <div class="basis-400px">
          <div class="topic-title-28px tw-mb-6">Tartu</div>
          <div class="tw-mb-4">
            <div class="link">
              <a href="tel:+3726464488">+372 646 448 8</a>
            </div>
            <div class="link">
              <a href="mailTo:info@OÜPrimelight.com">info@OÜPrimelight.com</a>
            </div>
          </div>
          <div class="link">
            <a href="#">Send a message &gt;</a>
          </div>
          <div class="link">
            <a href="#">Visit country page &gt;</a>
          </div>
          <div class="link">
            <a href="#">Navigate &gt;</a>
          </div>
        </div>
        <!-- col right -->
        <div class="basis-400px">
          <div class="topic-title-28px tw-mb-6">Company information</div>
          <div class="topic-description">
            <div>Primelight International OÜ</div>
            <div>Riia st. 24a, 51010</div>
            <div>Tartu, Estonia</div>
            <div>VAT code: EE101899220</div>
            <div>Company code: 12241708</div>
          </div>
        </div>
      </div>

      <!-- row 2 -->
      <div class="tw-flex tw-flex-wrap tw-justify-center tw-mt-20 tw-gap-10">
        <!-- col left -->
        <div class="basis-400px">
          <div class="topic-title-28px tw-mb-6">London (Sales office)</div>
          <div class="tw-mb-4">
            <div class="link">
              <a href="tel:+3726464488">info@OÜPrimelight.com</a>
            </div>
          </div>
          <div class="link">
            <a href="#">Send a message &gt;</a>
          </div>
          <div class="link">
            <a href="#">Visit country page &gt;</a>
          </div>
          <div class="link">
            <a href="#">Navigate &gt;</a>
          </div>
        </div>
        <!-- col right -->
        <div class="basis-400px">
          <div class="topic-title-28px tw-mb-6">Company information</div>
          <div class="topic-description">
            <div>OÜ Primelight UK LTD</div>
            <div>56 Leman Street, E1 8EU</div>
            <div>London, UK</div>
            <div>Company code: 10274449</div>
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
          <h2 class="tw-max-w-xl tw-text-center">
            How can we help you grow?
            <br />Request proposal
          </h2>
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
import { defineAsyncComponent, defineComponent, onMounted, ref } from 'vue';

import TagsToggle from "@/components/team/TagsToggle.vue"

export default defineComponent({
  name: 'Contact',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    TagsToggle,
    ContactFormCareer: defineAsyncComponent(() => import("@/components/careers/ContactFormCareer.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    onMounted(() => emit('ready'))

    const breakpoints = useBreakpoints(breakpointsTailwind)
    const md = breakpoints.smaller('md')

    return { md }
  },
});
</script>
 
 <style lang="scss" scoped>
.link {
  @apply tw-mb-1.5 tw-font-semibold;
}

a[href] {
  @apply tw-text-primary-1;
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