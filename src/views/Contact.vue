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
    <section class="tw-px-20 tw-py-30">
      <!-- top -->
      <div class="tw-flex tw-flex-wrap tw-gap-6 tw-text-sm tw-justify-center">
        <VButtonRadio v-model="country" :items="countries" inactive-class="tw-border-gray-200" />
      </div>

      <!-- bottom  -->
      <div class="topic-title tw-flex tw-justify-center tw-my-20">
        <h2 class="tw-max-w-3xl tw-text-center">OÜ Primelight International</h2>
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
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Contact',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    VButtonRadio: defineAsyncComponent(() => import("@/components/ui/VButtonRadio.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    onMounted(() => emit('ready'))

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
 
 <style lang="scss" scoped>
.link {
  @apply tw-mb-1.5 tw-font-semibold;
}

a[href] {
  @apply tw-text-primary-1;
}
</style>