<template>
    <!-- tw-bg-white tw-px-20 -->
    <div
        class="gray-shadow-1 tw-flex tw-justify-between tw-items-center tw-bg-gray-4 tw-rounded-4xl tw-relative"
    >
        <div class="tw-flex-1 tw-flex tw-justify-center">
            <WorkScene />
        </div>
        <div class="tw-flex-1 tw-relative tw-z-20">
            <div class="topic-title tw-w-4/5">{{ title }}</div>
            <VButton
                class="tw-mt-10 "
                text="Contact Us"
                variant="blue"
                width="244px"
                height="48px"
            />
        </div>

        <div class="tw-absolute tw-right-0 tw-z-10">
            <BgCooperation class="tw-rounded-4xl" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
    name: "Cooperation",
    components: {
        VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
        WorkScene: defineAsyncComponent(() => import("@/assets/icons/work-scene.svg")),
        BgCooperation: defineAsyncComponent(() => import("@/assets/icons/bg-cooperation.svg")),
    },
    props: {
        title: { type: [Number, String], default: '', },
    },
});
</script>


