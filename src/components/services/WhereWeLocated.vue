<template>
    <section
        class="tw-relative bg-where-we-located tw-overflow-hidden"
        :class="{
            'bg-where-we-located-xl': !sm,
            'bg-where-we-located-sm': sm,
        }"
    >
        <div
            class="max-layout-width-overflow-auto px-16px-48px-80px tw-flex tw-justify-between tw-flex-wrap md:tw-flex-nowrap tw-gap-10 tw-relative tw-z-10"
        >
            <!-- left -->
            <div class="tw-flex-1 tw-basis-1/2">
                <h2 class="topic-title tw-max-w-[380px]" v-html="$t('Where we are located')"></h2>
                <div class="mt-16px-24px-24px topic-description">
                    <div>{{ $t('Primelight OU was founded') }}</div>
                    <div class="tw-mt-2">
                        {{ $t('The companys corporate headquarters are located') }}
                        <span
                            v-for="(country, i) of countries"
                            :key="country"
                        >
                            <span class="tw-text-orange-1">{{ country }}</span>
                            <span v-if="i < countries.length - 2">, &nbsp;</span>
                            <span v-if="i === countries.length - 2">&nbsp;and&nbsp;</span>
                        </span>
                        {{ $t('with a sales offices in the') }}
                        <span
                            class="tw-text-orange-1"
                        >{{ $t('United Kingdom') }}</span>
                        {{ $t('and') }}
                        <span
                            class="tw-text-orange-1"
                        >{{ $t('Turkey') }}</span>.
                    </div>
                    <div
                        class="tw-mt-2"
                    >{{ $t('Most of our projects come from an international mindset and have ensured successful cooperation with clients in Europe Asia and Africa') }}</div>
                </div>
            </div>
            <!-- right -->
            <div
                class="tw-flex tw-basis-1/2 tw-flex-1 tw-mt-30 tw-my-20 sm:tw-my-10 xl:tw-my-0 xl:tw--translate-y-7 tw-relative tw-h-full"
            >
                <img
                    src="@/assets/images/company/world-map.png"
                    class="world-map tw-w-full md:tw-h-100 tw-top-0 tw--right-10 md:tw-absolute tw-scale-150 sm:tw-scale-110 tw-translate-x-4 xl:tw-translate-x-20"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineComponent, onMounted, ref, } from 'vue';

import { ICountry } from '@/store/modules/countries/countries.d';
import { useVuex } from '@/store/store'

export default defineComponent({
    name: "WhereWeLocated",
    setup() {
        const breakpoints = useBreakpoints(breakpointsTailwind)
        const sm = breakpoints.smaller('sm')

        const countries = ref([
            'Estonia', 'Latvia', 'Lithuania', 'Finland', 'Poland', 'Ukraine', 'Romania', 'Moldova', 'Russia', 'Belarus', 'Serbia', 'Slovakia', 'Bulgaria', 'North Macedonia', 'Denmark'
        ])

        const store = useVuex()

        const getCountries = async () => {
            countries.value = (await store.dispatch('countries/GET_COUNTRIES')).map((e: ICountry) => e.title).filter((e: string) => e.toLowerCase() !== 'international')
        }

        onMounted(getCountries)


        return { sm, countries }
    }
});
</script>



<style lang="scss" scoped>
.bg-where-we-located-xl {
    background-image: url("@/assets/images/company/bg-where-we-located-xl.png");
    background-repeat: no-repeat;
    background-position: top left;
}
.bg-where-we-located-sm {
    background-image: url("@/assets/images/company/bg-where-we-located-sm.png");
    background-repeat: no-repeat;
    background-position: top left;
}
</style>