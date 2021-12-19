<template>
    <!-- tw-h-60 -->
    <div class="tw-bg-white tw-p-2">
        <VIcon :icon="icon" />
        <div class="card-info__content tw-pt-6">
            <div class="tw-text-2.7xl tw-font-semibold">
                <!-- number -->
                {{ title }}
            </div>
            <div
                class="tw-flex tw-items-center tw-text-gray-2 tw-font-medium tw-pt-3"
            >{{ description }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
    name: "HelpColumn",
    components: {
        VIcon: defineAsyncComponent(() => import('@/components/ui/VIcon.vue'))
    },
    props: {
        title: { type: [Number, String], default: '', },
        description: { type: [Number, String], default: "", },
        icon: { type: String, default: "", },
    },
});
</script>



<style lang="scss" scoped>
.card-info__content {
    max-width: 336px;
}
</style>