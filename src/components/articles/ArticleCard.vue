<template>
    <div
        class="anim-500 tw-grow-1 tw-w-full tw-bg-white tw-rounded-4xl gray-shadow-1 tw-group hover:tw--translate-y-5"
    >
        <div class="tw-h-74 tw-overflow-hidden tw-cursor-pointer" @click="$emit('click')">
            <div class="anim-500 tw-h-full tw-overflow-hidden tw-block">
                <router-link :to="{ name: 'article', params: { id } }">
                    <img
                        class="tw-w-full tw-h-full tw-object-cover tw-rounded-t-3xl"
                        :src="img"
                        :alt="title"
                    />
                </router-link>
            </div>
        </div>
        <div class="tw-px-8 tw-pb-8">
            <div class="tw-text-orange-1 tw-text-sm tw-leading-6 tw-mt-6">{{ dateFormat(date) }}</div>
            <div class="tw-font-semibold tw-text-2xl tw-leading-8 tw-mt-3 tw-cursor-pointer">
                <router-link :to="{ name: 'article', params: { id } }">{{ title }}</router-link>
            </div>
            <router-link :to="{ name: 'article', params: { id } }">
                <VButton
                    class="tw-mt-9 tw-text-sm tw-text-blue-1 group-hover:tw-text-white group-hover:tw-bg-blue-1"
                    :text="`${buttonText} &nbsp; &gt;`"
                    height="48px"
                />
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n'

import { dateFormat } from '@/utils/dateFormat'

export default defineComponent({
    name: 'ArticleCard',
    components: {
        VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
    },
    props: {
        date: { type: String, default: '' },
        title: { type: String, default: '' },
        id: { type: [String, Number], default: undefined },
        img: { type: String, default: '' },
    },
    emits: ['click'],
    setup() {
        const { t } = useI18n({ useScope: 'global' });
        const buttonText = ref(t('button.read more'))

        return { buttonText, dateFormat }
    }
});
</script>
