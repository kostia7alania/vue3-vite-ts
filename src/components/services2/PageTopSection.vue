<template>
    <div
        class="tw-text-gray-1 dark:tw-bg-black tw-relative"
        :class="{
            'tw-bg-blue-1': theme === 'blue',
            'tw-bg-orange-1': theme === 'orange'
        }"
    >
        <div
            class="tw-flex tw-flex-col tw-gap-5 tw-pb-15 tw-pt-16 md:tw-pt-30 tw-px-5 md:tw-px-20 tw-relative tw-z-10"
        >
            <slot />
            <!--
              <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Services</div>
              <div class="tw-text-lg tw-font-medium tw-leading-7 tw-max-w-5xl"
              >Our team has strong educational credentials, intellectual curiosity, proven leadership capacity and commitment to values. We are analytically rigorous, delivering fact-based advice to get the job done. In doing so, we provide great value for the money price point, always striving to understand and meet the customer's needs as efficiently as possible, with the least negative impact on the environment.</div>
            -->
        </div>
        <div class="tw-absolute tw-right-0 tw-top-0">
            <BgPatternServices />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
    name: "PageTopSection",
    components: { BgPatternServices: defineAsyncComponent(() => import("@/components/patterns/BgPatternServices.vue")), },
    props: { theme: { type: String, default: "blue" } }, // blue or orange
});
</script>

