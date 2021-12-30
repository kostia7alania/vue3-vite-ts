<template>
  <VButton
    :class="{
      'tw-text-blue-1 tw-bg-blue-2': isOpen,
    }"
    class="tw-text-sm md:tw-text-base tw-font-medium tw-h-7 tw-duration-300 tw-relative tw-uppercase tw-border-none hover:tw-hue-rotate-0 active:tw-sepia-0"
    @click="isOpen = !isOpen"
  >
    <div class="tw-flex tw-items-center tw-gap-x-2">
      <div>{{ $i18n.locale }}</div>
      <div>
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="tw-fill-current"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.293031 1.29308C0.480558 1.10561 0.734866 1.00029 1.00003 1.00029C1.26519 1.00029 1.5195 1.10561 1.70703 1.29308L5.00003 4.58608L8.29303 1.29308C8.38528 1.19757 8.49562 1.12139 8.61763 1.06898C8.73963 1.01657 8.87085 0.988985 9.00363 0.987831C9.13641 0.986677 9.26809 1.01198 9.39098 1.06226C9.51388 1.11254 9.62553 1.18679 9.71943 1.28069C9.81332 1.37458 9.88757 1.48623 9.93785 1.60913C9.98813 1.73202 10.0134 1.8637 10.0123 1.99648C10.0111 2.12926 9.98354 2.26048 9.93113 2.38249C9.87872 2.50449 9.80254 2.61483 9.70703 2.70708L5.70703 6.70708C5.5195 6.89455 5.26519 6.99987 5.00003 6.99987C4.73487 6.99987 4.48056 6.89455 4.29303 6.70708L0.293031 2.70708C0.10556 2.51955 0.000244141 2.26525 0.000244141 2.00008C0.000244141 1.73492 0.10556 1.48061 0.293031 1.29308Z"
          />
        </svg>
      </div>
    </div>
    <div
      class="tw-text-lg tw-font-normal tw-flex tw-flex-col  tw-rounded-3xl tw-overflow-hidden tw-absolute tw-z-100 tw-top-10 tw-left-2/4 tw--translate-x-1/2"
      :class="{ 'tw-hidden': !isOpen }"
    >
      <div
        class="tw-px-4 tw-py-3 tw-bg-white"
        :class="{ 'tw-bg-blue-3': $i18n.locale === 'en' }"
        @click="localeToggle('en')"
      >EN</div>
      <div
        class="tw-px-4 tw-py-3 tw-bg-white"
        :class="{ 'tw-bg-blue-3': $i18n.locale === 'lt' }"
        @click="localeToggle('lt')"
      >LT</div>
    </div>
  </VButton>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, Ref, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

type TLocales = 'en' | 'lt'

const STORE_KEY = 'locale'

const getInitialTheme = (): TLocales | void => {

  if (window?.localStorage) {
    const localeStored: TLocales = window.localStorage.getItem(STORE_KEY) as TLocales
    if (['en', 'lt'].includes(localeStored)) return localeStored
  }
}



export default defineComponent({
  name: 'LocaleSelect',
  components: {
    VButton: defineAsyncComponent(() => import('@/components/ui/VButton.vue')),
  },
  setup(/* _, ctx: SetupContext */) {
    const isOpen: Ref<boolean> = ref(false)

    const { locale } = useI18n({ useScope: 'global' });


    const localeToggle = (loc: TLocales) => {
      locale.value = loc// locale.value === 'en' ? 'lt' : 'en'
      localStorage.setItem(STORE_KEY, String(locale.value))
    }

    onMounted(() => {
      const storedLocale = getInitialTheme()
      if (storedLocale) locale.value = storedLocale
    })



    return { localeToggle, isOpen }
  },
})
</script>