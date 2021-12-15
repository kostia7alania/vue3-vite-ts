<template>
    <div class="basis-400px tw-grow-1 tw-w-full tw-bg-white tw-rounded-3xl gray-shadow-1">
        <div class="tw-h-74 tw-overflow-hidden">
            <img
                class="tw-w-full tw-rounded-t-3xl"
                src="@/assets/images/experienced-professionals.png"
                alt="Experienced professionals"
            />
        </div>
        <div class="tw-px-8 tw-pb-8">
            <div class="tw-text-orange-1 tw-mt-4 tw-text-sm tw-leading-6 tw-mt-6">{{ date }}</div>
            <div class="tw-font-semibold tw-text-2xl tw-leading-6 tw-mt-3">{{ title }}</div>
            <VButton
                class="tw-mt-9 tw-text-sm"
                :text="`${buttonText} &nbsp; &gt;`"
                :variant="buttonVariant"
                height="48px"
                @click="$emit('click')"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n'

export default defineComponent({
    name: 'ArticleCard',
    components: {
        VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
    },
    props: {
        date: { type: String, default: '' },
        title: { type: String, default: '' },
        buttonVariant: { type: String, default: 'blue' },
    },
    emits: ['click'],
    setup() {
        const { t } = useI18n({ useScope: 'global' });
        const buttonText = ref(t('button.read more'))

        return { buttonText }
    }
});
</script>
