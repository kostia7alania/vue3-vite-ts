<template>
  <footer class="app-header tw-flex tw-flex-col">
    <div
      class="tw-bg-blue-1 dark:tw-bg-black dark:tw-text-gray-300 tw-flex-1 tw-relative tw-overflow-hidden tw-pb-15 lg:tw-pb-20"
    >
      <div
        class="px-16px-48px-80px tw-flex tw-gap-x-5 tw-gap-y-10 lg:tw-gap-12 tw-flex-wrap lg:tw-flex-nowrap tw-pt-15 md:tw-pt-20 tw-z-10 tw-relative"
      >
        <!-- col Logo -->
        <div class="tw-order-1 tw-basis-full lg:tw-basis-auto">
          <Logo white class="footer-title" />
          <div
            class="footer-description tw-text-sm md:tw-text-base"
          >{{ $t('the challenger advisory') }}</div>
        </div>

        <!-- col Contact Us -->

        <div class="tw-order-3 lg:tw-order-2 tw-flex-1 lg:tw-flex-none">
          <div class="footer-title">{{ $t('Contact Us') }}</div>
          <div class="footer-description tw-text-xs2 xl:tw-text-base">
            <div>OÜ Primelight</div>
            <div class="tw-pt-3">{{ $t('Registry code') }} 11954642</div>
            <div class="tw-pt-3">{{ $t('Registered 14.06.2010') }}</div>
            <div class="tw-pt-3">{{ $t('address') }}</div>
            <div class="tw-pt-3">
              <a
                class="hover:tw-text-black"
                href="mailTo:info@primelightou.com"
              >info@primelightou.com</a>
            </div>
          </div>
        </div>

        <!-- col OUR OFFICES -->
        <div class="tw-grow tw-order-2 tw-flex-1 lg:tw-order-3 tw-basis-full lg:tw-basis-auto">
          <div class="footer-title tw-text-base tw-uppercase">{{ $t('Our offices') }}</div>
          <div class="footer-description">
            <div
              class="tw-flex tw-flex-wrap tw-flex-col tw-h-68 tw-gap-x-3 tw-gap-y-3 tw-text-xs2 xl:tw-text-base"
            >
              <div v-for="(country, i) of countries" :key="country.id" class="tw-max-w-xs">
                <router-link
                  :to="{ name: 'team', query: { countryId: country.id, countryTitle: country.title } }"
                >{{ country.title }}</router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- col Social -->
        <div v-if="0" class="tw-order-4 tw-flex-1 lg:tw-flex-none">
          <div class="footer-title">{{ $t('Social') }}</div>
          <div class="tw-flex tw-items-center tw-gap-x-3">
            <!-- FACEBOOK -->
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.4" cx="24" cy="24" r="24" fill="#FDFDFD" />
                <path
                  d="M21.9053 34V25.0547H19V21.5H21.9053V18.6992C21.9053 15.6563 23.7083 14 26.3409 14C27.6023 14 28.6856 14.0977 29 14.1406V17.3203H27.1742C25.7424 17.3203 25.4659 18.0234 25.4659 19.0508V21.5H28.697L28.2538 25.0547H25.4659V34"
                  fill="#FDFDFD"
                />
              </svg>
            </button>

            <!-- linkedin -->
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.4" cx="24" cy="24" r="24" fill="#FDFDFD" />
                <path
                  d="M19.3052 32.5H15.7807V20.8164H19.3052V32.5ZM17.5411 19.2227C16.4143 19.2227 15.5 18.2617 15.5 17.1016C15.5 15.9414 16.4143 15 17.5411 15C18.6678 15 19.5821 15.9414 19.5821 17.1016C19.5821 18.2617 18.6678 19.2227 17.5411 19.2227ZM32.4962 32.5H28.9794V26.8125C28.9794 25.457 28.9528 23.7188 27.147 23.7188C25.3146 23.7188 25.0338 25.1914 25.0338 26.7148V32.5H21.5132V20.8164H24.8934V22.4102H24.9428C25.4132 21.4922 26.5627 20.5234 28.2775 20.5234C31.8437 20.5234 32.5 22.9414 32.5 26.082V32.5H32.4962Z"
                  fill="#FDFDFD"
                />
              </svg>
            </button>

            <!-- insta -->
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.4" cx="24" cy="24" r="24" fill="#FDFDFD" />
                <path
                  d="M24 21.52C23.5095 21.52 23.03 21.6654 22.6222 21.938C22.2144 22.2105 21.8965 22.5978 21.7088 23.0509C21.5211 23.5041 21.472 24.0028 21.5677 24.4838C21.6633 24.9649 21.8995 25.4068 22.2464 25.7536C22.5932 26.1005 23.0351 26.3367 23.5162 26.4323C23.9972 26.528 24.4959 26.4789 24.9491 26.2912C25.4022 26.1035 25.7895 25.7856 26.062 25.3778C26.3346 24.97 26.48 24.4905 26.48 24C26.48 23.6743 26.4159 23.3518 26.2912 23.0509C26.1666 22.7501 25.9839 22.4767 25.7536 22.2464C25.5233 22.0161 25.2499 21.8334 24.9491 21.7088C24.6482 21.5841 24.3257 21.52 24 21.52ZM33.93 19.07C33.9247 18.2978 33.7825 17.5326 33.51 16.81C33.3093 16.2813 32.9987 15.8011 32.5988 15.4012C32.1989 15.0013 31.7187 14.6907 31.19 14.49C30.4674 14.2175 29.7022 14.0753 28.93 14.07C27.64 14 27.26 14 24 14C20.74 14 20.36 14 19.07 14.07C18.2978 14.0753 17.5326 14.2175 16.81 14.49C16.2813 14.6907 15.8011 15.0013 15.4012 15.4012C15.0013 15.8011 14.6907 16.2813 14.49 16.81C14.2175 17.5326 14.0753 18.2978 14.07 19.07C14 20.36 14 20.74 14 24C14 27.26 14 27.64 14.07 28.93C14.0808 29.705 14.2228 30.4725 14.49 31.2C14.6898 31.7263 15.0001 32.2037 15.4 32.6C15.7982 33.0023 16.2794 33.3129 16.81 33.51C17.5326 33.7825 18.2978 33.9247 19.07 33.93C20.36 34 20.74 34 24 34C27.26 34 27.64 34 28.93 33.93C29.7022 33.9247 30.4674 33.7825 31.19 33.51C31.7206 33.3129 32.2018 33.0023 32.6 32.6C32.9999 32.2037 33.3102 31.7263 33.51 31.2C33.7823 30.4739 33.9244 29.7055 33.93 28.93C34 27.64 34 27.26 34 24C34 20.74 34 20.36 33.93 19.07ZM31.39 27.07C31.3579 27.6871 31.2262 28.295 31 28.87C30.8059 29.3497 30.5173 29.7854 30.1514 30.1514C29.7854 30.5173 29.3497 30.8059 28.87 31C28.2895 31.2136 27.6783 31.3318 27.06 31.35C26.27 31.35 26.06 31.35 24 31.35C21.94 31.35 21.73 31.35 20.94 31.35C20.3217 31.3318 19.7105 31.2136 19.13 31C18.6341 30.8157 18.1863 30.5217 17.82 30.14C17.4577 29.7813 17.1778 29.3479 17 28.87C16.7856 28.2901 16.6706 27.6782 16.66 27.06C16.66 26.27 16.66 26.06 16.66 24C16.66 21.94 16.66 21.73 16.66 20.94C16.6706 20.3218 16.7856 19.7099 17 19.13C17.1843 18.6341 17.4783 18.1863 17.86 17.82C18.2203 17.4596 18.6533 17.1801 19.13 17C19.7105 16.7864 20.3217 16.6682 20.94 16.65C21.73 16.65 21.94 16.65 24 16.65C26.06 16.65 26.27 16.65 27.06 16.65C27.6783 16.6682 28.2895 16.7864 28.87 17C29.3659 17.1843 29.8137 17.4783 30.18 17.86C30.5423 18.2187 30.8222 18.6521 31 19.13C31.2136 19.7105 31.3318 20.3217 31.35 20.94C31.35 21.73 31.35 21.94 31.35 24C31.35 26.06 31.42 26.27 31.39 27.06V27.07ZM29.79 19.63C29.6709 19.307 29.4832 19.0136 29.2398 18.7702C28.9964 18.5268 28.703 18.3391 28.38 18.22C27.9365 18.0663 27.4693 17.9918 27 18C26.22 18 26 18 24 18C22 18 21.78 18 21 18C20.5283 18.0046 20.0611 18.0926 19.62 18.26C19.3019 18.3737 19.0117 18.5537 18.7686 18.7882C18.5255 19.0227 18.3351 19.3062 18.21 19.62C18.0648 20.0654 17.9938 20.5316 18 21C18 21.78 18 22 18 24C18 26 18 26.22 18 27C18.0099 27.4712 18.0978 27.9375 18.26 28.38C18.3791 28.703 18.5668 28.9964 18.8102 29.2398C19.0536 29.4832 19.347 29.6709 19.67 29.79C20.0967 29.9469 20.5457 30.0347 21 30.05C21.78 30.05 22 30.05 24 30.05C26 30.05 26.22 30.05 27 30.05C27.4717 30.0454 27.9389 29.9574 28.38 29.79C28.703 29.6709 28.9964 29.4832 29.2398 29.2398C29.4832 28.9964 29.6709 28.703 29.79 28.38C29.9574 27.9389 30.0454 27.4717 30.05 27C30.05 26.22 30.05 26 30.05 24C30.05 22 30.05 21.78 30.05 21C30.0503 20.5278 29.9621 20.0597 29.79 19.62V19.63ZM24 27.82C23.4988 27.82 23.0026 27.7211 22.5397 27.529C22.0768 27.3369 21.6563 27.0554 21.3024 26.7005C20.9485 26.3457 20.668 25.9245 20.4771 25.4611C20.2863 24.9977 20.1887 24.5012 20.19 24C20.19 23.2441 20.4143 22.5051 20.8345 21.8767C21.2547 21.2483 21.8519 20.7587 22.5505 20.4698C23.2491 20.181 24.0177 20.1059 24.7589 20.2541C25.5002 20.4024 26.1808 20.7672 26.7147 21.3024C27.2485 21.8376 27.6116 22.5192 27.7578 23.2609C27.9041 24.0026 27.827 24.771 27.5363 25.4688C27.2457 26.1666 26.7545 26.7625 26.125 27.1811C25.4955 27.5996 24.7559 27.822 24 27.82ZM28 20.93C27.7789 20.9066 27.5744 20.8022 27.4257 20.637C27.277 20.4717 27.1947 20.2573 27.1947 20.035C27.1947 19.8127 27.277 19.5983 27.4257 19.433C27.5744 19.2678 27.7789 19.1634 28 19.14C28.2211 19.1634 28.4256 19.2678 28.5743 19.433C28.723 19.5983 28.8053 19.8127 28.8053 20.035C28.8053 20.2573 28.723 20.4717 28.5743 20.637C28.4256 20.8022 28.2211 20.9066 28 20.93Z"
                  fill="#FDFDFD"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="tw-absolute tw-left-0 tw-top-1/2 tw-bottom-1/2">
        <BgPattern />
      </div>
    </div>
    <!-- footer of footer -->
    <div
      class="tw-bg-black-1 tw-text-white tw-h-20 tw-mt-auto tw-flex tw-items-center xs:tw-justify-between tw-flex-wrap md:tw-flex-nowrap tw-px-5 md:tw-px-20 tw-gap-4"
    >
      <!-- left -->
      <div class="footer-of-footer tw-font-medium">
        <div>{{ $t('All rights reserved') }}</div>
      </div>
      <!-- right -->
      <div class="footer-of-footer tw-font-semibold">
        <div>{{ $t('registry-code') }}</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, ref } from 'vue';

import { useVuex } from '@/store/store'



export default defineComponent({
  name: 'MainFooter',
  components: {
    BgPattern: defineAsyncComponent(() => import('@/components/patterns/BgPattern.vue')),
    Logo: defineAsyncComponent(() => import('./Logo.vue'))
  },
  setup(/* _, ctx: SetupContext */) {
    const store = useVuex()

    const countries = ref([
      // col 1
      'INTERNATIONAL', 'ESTONIA', 'LATVIA', 'FINLAND', 'POLAND',
      // col 2
      'SLOVAKIA',
      'UKRAINE',
      'ROMANIA',
      'MOLDOVA',
      'RUSSIA',
      'BELARUS',
      'SERBIA',
      // col 3
      'BULGARIA',
      'NORTH MACEDONIA',
      'KOSOVO',
      'ARMENIA',
    ].map((title, id) => ({ title, id: id + 1 })))

    const getCountries = async () => {
      countries.value = (await store.dispatch('countries/GET_COUNTRIES'))
    }

    onMounted(getCountries)

    return {
      countries
    }
  },
});
</script>

<style lang="scss" scoped>
.app-header {
  border: 1.5px solid #e8e7ea;
  z-index: 40;
  @media (max-width: 770px) {
    .logo {
      width: 32px;
    }
  }
}

.logo {
  transform: rotate(0deg);
  transition: transform 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(360deg);
  }
  &:active {
    transform: rotate(-360deg);
  }
}

.footer-title {
  @apply tw-font-semibold tw-text-white tw-uppercase tw-pb-3 md:tw-pb-4;
}
.footer-description {
  @apply tw-font-medium tw-text-white tw-opacity-60;
}
.footer-of-footer {
  @apply tw-text-xs md:tw-text-sm xl:tw-text-base;
}
</style>

