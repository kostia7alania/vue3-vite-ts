<template>
    <section class="tw-relative">
        <div
            class="tw-flex tw-justify-between tw-flex-wrap xl:tw-flex-nowrap tw-px-20 tw-gap-10 tw-relative tw-z-10"
        >
            <!-- left -->
            <div class="tw-pt-20 tw-flex-1 tw-basis-1/2">
                <h2 class="topic-title">Where are we located?</h2>
                <div class="tw-pt-6 topic-description">
                    <div>In nine years from its founding, OÜ Primelight became the leading management consultancy across the Baltics and Eastern Europe, employing over 350 consultants in 29 offices across 18 countries.</div>
                    <div class="tw-mt-2">
                        Our international headquarters are located in Tartu, Estonia. Other OÜ Primelight offices are spread across
                        <span
                            v-for="country of 'Estonia, Latvia, Lithuania, Finland, Poland, Ukraine, Romania, Moldova, Russia, Belarus, Serbia, Slovakia, Bulgaria, North Macedonia, Denmark'.split(', ')"
                            :key="country"
                        >
                            <span class="tw-text-orange-1">{{ country }}</span>,
                        </span>
                        <span class="tw-text-orange-1">Kosovo</span>
                        and
                        <span class="tw-text-orange-1">Armenia</span>
                        with a sales offices in the
                        <span
                            class="tw-text-orange-1"
                        >United Kingdom</span>
                        and
                        <span class="tw-text-orange-1">Turkey</span>.
                    </div>
                    <div
                        class="tw-mt-2"
                    >We also conduct consulting and market research projects in countries beyond our home markets. Thousands of completed projects come from a flexible approach and international mindset, and they have ensured successful cooperation with clients in 40+ countries in Europe, Asia and Africa.</div>
                </div>
            </div>
            <!-- right -->
            <div class="tw-flex tw-flex-wrap tw-basis-1/2 tw-flex-1 tw-gap-10 tw-pt-12">
                <WorldMap class="world-map tw-w-full tw-translate-x-20" />
            </div>
        </div>
        <div class="tw-absolute tw-left-0 tw-bottom-0">
            <BgPatternLocated />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
    name: "WhereWeLocated",
    components: {
        BgPatternLocated: defineAsyncComponent(() => import("@/components/patterns/BgPatternLocated.vue")),
        WorldMap: defineAsyncComponent(() => import("@/assets/icons/world-map.svg")),
    }
});
</script>


