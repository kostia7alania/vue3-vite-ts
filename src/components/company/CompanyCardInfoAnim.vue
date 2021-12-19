<template>
    <CardFlip>
        <template #back>
            <div
                :class="{
                    'tw-bg-orange-1': theme === 'orange',
                    'tw-bg-blue-1': theme === 'blue',
                }"
                class="tw-flex tw-flex-col tw-justify-end tw-text-left tw-h-full tw-text-white tw-p-8 tw-rounded-4xl"
            >
                <div>
                    <div
                        class="tw-font-semibold tw-leading-10"
                        :class="titleClassComputed"
                    >{{ title }}</div>
                    <div class="tw-mt-4 tw-leading-6">{{ description }}</div>
                </div>
            </div>
        </template>
        <!-- :hover -->
        <template #front>
            <div class="tw-overflow-hidden tw-h-full tw-text-white tw-rounded-4xl tw-relative">
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
                <img
                    v-else-if="image === 'adventure'"
                    class="tw-w-full tw-rounded-4xl"
                    src="@/assets/images/careers/adventure.jpg"
                    alt="Adventure"
                />
                <img
                    v-else-if="image === 'flexibility'"
                    class="tw-w-full tw-rounded-4xl"
                    src="@/assets/images/careers/flexibility.jpg"
                    alt="Flexibility"
                />
                <img
                    v-else-if="image === 'intellectual-challenge'"
                    class="tw-w-full tw-rounded-4xl"
                    src="@/assets/images/careers/intellectual-challenge.jpg"
                    alt="intellectual challenge"
                />
                <img
                    v-else-if="image === 'non-hierarchical-organization'"
                    class="tw-w-full tw-rounded-4xl"
                    src="@/assets/images/careers/non-hierarchical-organization.jpg"
                    alt="non hierarchical organization"
                />
                <img
                    v-else-if="image === 'fun'"
                    class="tw-w-full tw-rounded-4xl"
                    src="@/assets/images/careers/fun.jpg"
                    alt="fun"
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
                    :class="titleClassComputed"
                    class="tw-font-semibold tw-leading-6 tw-absolute tw-z-20 tw-bottom-0 tw-p-8"
                >
                    <div class="w-1/2 tw-text-left tw-leading-10">{{ title }}</div>
                </div>
            </div>
        </template>
    </CardFlip>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed, } from 'vue';


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
        titleClass: { type: String, default: undefined }
    },
    emits: ['click'],
    setup(props) {
        const titleClassComputed = computed(() => {
            if (props.titleClass) return props.titleClass
            return 'tw-text-2.7xl'
        })
        return {
            titleClassComputed
        }
    },
});
</script>


 