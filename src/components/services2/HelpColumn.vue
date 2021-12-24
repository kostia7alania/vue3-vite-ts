<template>
    <!-- tw-h-60 -->
    <div class="tw-bg-white tw-p-2">
        <VIcon :icon="icon" class="tw-h-20 lg:tw-h-23" />
        <div class="card-info__content tw-pt-4 md:tw-pt-6">
            <div class="topic-title-28px">
                <!-- number -->
                {{ title }}
            </div>
            <div
                class="tw-flex tw-items-center tw-text-gray-2 tw-font-medium tw-pt-2 md:tw-pt-3"
            >{{ description }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VIcon from '@/components/ui/VIcon.vue'

export default defineComponent({
    name: "HelpColumn",
    components: {
        VIcon
    },
    props: {
        title: { type: [Number, String], default: '', },
        description: { type: [Number, String], default: "", },
        icon: { type: String, default: "", },
    },
});
</script>


 