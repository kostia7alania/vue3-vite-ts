<template>
    <div
        class=" gray-shadow-1 tw-bg-white tw-rounded-4xl tw-px-22 tw-flex-grow tw-flex-shrink tw-relative"
    >
        <div class="topic-title-28px tw-mb-3 tw-pt-15">{{ title }}</div>
        <div class="topic-description">{{ description }}</div>

        <div class="tw-absolute tw--top-8 tw--left-7 tw-border-4 tw-border-black-1 tw-rounded-full">
            <img v-if="image === 'estonia'" src="@/assets/images/financing/estonia.png" alt="flag" />
            <img
                v-else-if="image === 'lithuania'"
                src="@/assets/images/financing/lithuania.png"
                alt="flag"
            />
            <img v-else-if="image === 'latvia'" src="@/assets/images/financing/latvia.png" alt="flag" />
            <img
                v-else-if="image === 'romania'"
                src="@/assets/images/financing/romania.png"
                alt="flag"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'NationalCard',
    props: {
        title: { type: String, default: "" },
        description: { type: String, default: "" },
        image: { type: String, default: "" },
    }
});
</script>