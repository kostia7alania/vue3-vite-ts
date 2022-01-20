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
      <div class="max-layout-width">
        <!-- top -->
        <VCountries v-model:country="country" key-label="title" key-value="id" />

        <!-- bottom  -->
        <div class="topic-title tw-flex tw-justify-center tw-my-20">
          <h2 class="tw-max-w-3xl lg:tw-text-center">{{ $t('Primelight OÜ International') }}</h2>
        </div>

        <div v-if="isLoading" class="tw-flex tw-justify-around tw-gap-10">
          <div class="tw-flex tw-justify-center tw-flex-col tw-flex-wrap tw-gap-10">
            <div v-for="item of new Array(5).keys()" :key="item">
              <VSkeleton />
            </div>
          </div>

          <div class="tw-flex tw-justify-center tw-flex-col tw-flex-wrap-reverse tw-gap-10">
            <div v-for="item of new Array(5).keys()" :key="item">
              <VSkeleton />
            </div>
          </div>
        </div>
        <div v-else>
          <!-- row 1 -->
          <div
            v-for="contact of contacts"
            :key="contact.id"
            class="tw-flex tw-flex-wrap tw-justify-center tw-mt-20 tw-gap-10"
          >
            <!-- col left -->
            <div class="basis-400px">
              <div class="topic-title-28px tw-mb-6">{{ contact.title }}</div>
              <div class="tw-mb-4">
                <div v-if="contact.phone" class="link">
                  <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
                </div>
                <div v-if="contact.email1" class="link">
                  <a :href="`mailTo:${contact.email1}`">{{ contact.email1 }}</a>
                </div>
                <div v-if="contact.email2" class="link">
                  <a :href="`mailTo:${contact.email2}`">{{ contact.email2 }}</a>
                </div>
              </div>
              <div class="link">
                <a href="#">{{ $t('Send a message') }} &gt;</a>
              </div>
              <!--
              <div class="link">
              <a href="#">{{ $t('Visit country page') }} &gt;</a>
              </div>
              <div class="link">
              <a href="#">{{ $t('Navigate') }} &gt;</a>
              </div>
              -->
            </div>
            <!-- col right -->
            <div class="basis-400px">
              <div class="topic-title-28px tw-mb-6">{{ $t('Company information') }}</div>
              <div
                class="topic-description tw-max-w-[250px]"
                v-html="contact.address.split(',').join(',<br>')"
              ></div>
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
      <div class="max-layout-width">
        <div class="pt-80px-120px-120px">
          <div class="topic-title tw-flex tw-justify-center tw-mb-6">
            <h2 class="tw-max-w-xl tw-text-center">
              {{ $t('How can we help you grow') }}
              <br />
              {{ $t('Request proposal') }}
            </h2>
          </div>
        </div>

        <div class="tw-pt-20 tw-pb-35">
          <ContactFormCareer class="tw-bg-white" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineAsyncComponent, defineComponent, onMounted, Ref, ref, watch } from 'vue';

import VCountries from "@/components/ui/VCountries.vue"
import { IContact } from '@/store/modules/contacts/contacts.d';
import { useVuex } from '@/store/store'

export default defineComponent({
  name: 'Contact',
  components: {
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    VCountries,
    ContactFormCareer: defineAsyncComponent(() => import("@/components/careers/ContactFormCareer.vue")),
    VSkeleton: defineAsyncComponent(() => import("@/components/ui/VSkeleton.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    const store = useVuex()

    onMounted(() => emit('ready'))

    const breakpoints = useBreakpoints(breakpointsTailwind)
    const md = breakpoints.smaller('md')

    const country = ref(null)
    const contacts: Ref<Array<IContact>> = ref([])

    const isLoading = ref(false)

    const getCountries = async () => {
      if (!country.value) return
      isLoading.value = true
      try {
        contacts.value = await store.dispatch('contacts/GET_CONTACT', country.value)
      } catch (err) {
        console.error({ err })
      } finally {
        isLoading.value = false
      }
    }

    watch(() => country.value, getCountries, { immediate: true })

    return { md, country, isLoading, contacts }
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