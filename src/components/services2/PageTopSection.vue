<template>
    <div
        :class="{
            'tw-bg-blue-1': theme === 'blue',
            'tw-bg-orange-1': theme === 'orange',
            'bg-section-sm': smallerMd,
            'bg-section-xl': !smallerMd,
        }"
        class="tw-text-gray-1 dark:tw-bg-black tw-relative"
    >
        <div class="px-16px-48px-80px tw-flex tw-flex-col">
            <div class="mt-60px-120px-120px tw-mb-15 ">
                <slot />
            </div>
            <!--
              <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Services</div>
              <div class="tw-text-lg tw-font-medium tw-leading-7 tw-max-w-5xl"
              >Our team has strong educational credentials, intellectual curiosity, proven leadership capacity and commitment to values. We are analytically rigorous, delivering fact-based advice to get the job done. In doing so, we provide great value for the money price point, always striving to understand and meet the customer's needs as efficiently as possible, with the least negative impact on the environment.</div>
            -->
        </div>
    </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineComponent } from 'vue';

export default defineComponent({
    name: "PageTopSection",
    props: { theme: { type: String, default: "blue" } }, // blue or orange
    setup() {
        const breakpoints = useBreakpoints(breakpointsTailwind)
        const smallerMd = breakpoints.smaller('md')

        return { smallerMd }
    }
});
</script>

<style lang="scss" scoped>
.bg-section-xl {
    background-image: url("@/assets/images/layout/bg-section-xl.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.bg-section-sm {
    background-image: url("@/assets/images/layout/bg-section-sm.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

