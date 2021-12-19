<template>
    <CardFlip>
        <template #back>
            <div
                :class="{
                    'tw-bg-orange-1': theme === 'orange',
                    'tw-bg-blue-1': theme === 'blue',
                }"
                class="h-510px tw-flex tw-flex-col tw-justify-end tw-text-left tw-text-white tw-p-8 tw-rounded-4xl"
            >
                <div>
                    <div class="tw-font-semibold tw-text-2.7xl tw-leading-10">{{ title }}</div>
                    <div class="tw-mt-4  tw-leading-6">{{ description }}</div>
                </div>
            </div>
        </template>
        <!-- :hover -->
        <template #front>
            <div class="h-510px tw-overflow-hidden tw-text-white tw-rounded-4xl tw-relative">
                <img
                    v-if="image === 'experienced-professionals'"
                    class="tw-w-full tw-rounded-4xl"
                    src="@/assets/images/experienced-professionals.png"
                    alt="Experienced professionals"
                />
                <img
                    v-else-if="image === 'students-and-graduates'"
                    class="tw-w-full tw-rounded-4xl"
                    src="@/assets/images/students-and-graduates.jpg"
                    alt="Experienced professionals"
                />

                <div
                    class="tw-h-full tw-w-full tw-absolute tw-z-10 tw-top-0 tw-rounded-4xl"
                    :class="
                        {
                            'bg-gradient-blue-1': theme === 'blue',
                            'bg-gradient-orange-1': theme === 'orange',
                        }
                    "
                />

                <div
                    class="tw-font-semibold tw-text-2.7xl tw-leading-6 tw-absolute tw-z-20 tw-bottom-0 tw-p-8"
                >
                    <div class="w-1/2 tw-text-left tw-leading-10">{{ title }}</div>
                </div>
            </div>
        </template>
    </CardFlip>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, } from 'vue';


export default defineComponent({
    name: "CompanyCardInfoAnim",
    components: {
        CardFlip: defineAsyncComponent(() => import('@/components/services/CardFlip.vue')),
    },
    props: {
        title: { type: [Number, String], default: '', },
        description: { type: [Number, String], default: "", },
        theme: { type: String, default: "", }, // blue orange
        image: { type: String, default: "", }, // @/assets/images/experienced-professionals.png
    },
    emits: ['click'],
});
</script>


 