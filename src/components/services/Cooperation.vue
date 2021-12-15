<template>
    <!-- tw-bg-white tw-px-20 -->
    <section>
        <div
            class="gray-shadow-1 tw-flex tw-justify-between tw-items-center tw-bg-gray-4 tw-rounded-3xl tw-relative"
        >
            <div class="tw-flex-1 tw-flex tw-justify-center">
                <WorkScene />
            </div>
            <div class="tw-flex-1">
                <div class="topic-title">
                    Interested In
                    <br />cooperation?
                </div>
                <VButton
                    class="tw-mt-10 w-244px"
                    text="Contact Us"
                    variant="blue"
                    width="244px"
                    height="48px"
                />
            </div>

            <div class="tw-absolute tw-right-0">
                <BgCooperation />
            </div>
        </div>
    </section>
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
        description: { type: [Number, String], default: "", },
        icon: { type: String, default: "", },
    },
});
</script>


