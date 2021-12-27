<template>
    <!-- tw-bg-white tw-px-20 -->
    <div
        :class="{
            'bg-cooperation': !smallerXl,
        }"
        class="gray-shadow-1 tw-pb-10 tw-pt-3 md:tw-pt-5 md:tw-pb-30 xl:tw-pb-10 tw-flex tw-flex-wrap xl:tw-flex-nowrap tw-justify-center tw-items-center tw-bg-gray-4 tw-rounded-4xl tw-relative tw-overflow-hidden"
    >
        <div class="tw-flex-1 tw-flex tw-justify-center tw-basis-full">
            <WorkScene class="tw-h-100" />
        </div>
        <div
            class="tw-flex tw-flex-col tw-items-center xl:tw-items-start tw-justify-center tw-flex-1 tw-relative tw-z-20 tw-basis-full"
        >
            <div class="topic-title tw-w-1/2 xl:tw-w-4/5 tw-text-center xl:tw-text-left">{{ title }}</div>
            <router-link :to="{ name: 'contact' }">
                <VButton
                    class="tw-mt-10 h-56px-48px-48px"
                    text="Contact Us"
                    variant="blue"
                    width="244px"
                />
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
    name: "Cooperation",
    components: {
        VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
        WorkScene: defineAsyncComponent(() => import("@/assets/icons/work-scene.svg")),
    },
    props: {
        title: { type: [Number, String], default: '', },
    },
    setup() {
        const breakpoints = useBreakpoints(breakpointsTailwind)
        const smallerXl = breakpoints.smaller('xl')
        return { smallerXl }
    },
});
</script>


<style scoped>
</style>




<!-- bg-services-we-provide -->
<style lang="scss" scoped>
.bg-cooperation {
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    // background-size: cover;
    background-image: url("@/assets/images/patterns/bg-cooperation.png");
}
</style>

