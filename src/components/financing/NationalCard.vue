<template>
    <div
        class="tw-bg-white tw-rounded-4xl xl:tw-px-22 tw-flex-grow tw-flex-shrink tw-relative"
        :class="{ 'gray-shadow-1': !xl }"
    >
        <div class="xl:tw-absolute tw--top-8 tw--left-7">
            <div class="tw-inline-block tw-border-4 tw-border-black-1 tw-rounded-full">
                <img
                    class="card-image"
                    v-if="image === 'estonia'"
                    src="@/assets/images/financing/estonia.png"
                    alt="flag"
                />
                <img
                    v-else-if="image === 'lithuania'"
                    class="card-image"
                    src="@/assets/images/financing/lithuania.png"
                    alt="flag"
                />
                <img
                    v-else-if="image === 'latvia'"
                    class="card-image"
                    src="@/assets/images/financing/latvia.png"
                    alt="flag"
                />
                <img
                    v-else-if="image === 'romania'"
                    class="card-image"
                    src="@/assets/images/financing/romania.png"
                    alt="flag"
                />
            </div>
        </div>
        <div class="topic-title-28px tw-mb-2 xl:tw-mb-3 tw-pt-4 xl:tw-pt-15">{{ title }}</div>
        <div class="topic-description">{{ description }}</div>
    </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineComponent } from "vue";

export default defineComponent({
    name: 'NationalCard',
    props: {
        title: { type: String, default: "" },
        description: { type: String, default: "" },
        image: { type: String, default: "" },
    },
    setup() {
        const breakpoints = useBreakpoints(breakpointsTailwind)
        const xl = breakpoints.smaller('xl')

        return { xl }
    },
});
</script>

<style lang="scss" scoped>
.card-image {
    @apply tw-h-[80px] xl:tw-h-full;
}
</style>