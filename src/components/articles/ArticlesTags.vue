<template>
    <div class="tw-flex tw-flex-wrap tw-gap-6 tw-text-sm">
        <VButtonRadio
            v-model="category"
            :items="categories"
            theme="blue"
            active-class="tw-bg-white tw-text-orange-1 active-class"
            inactive-class="inactive-class"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref } from 'vue';
// import { useI18n } from 'vue-i18n'

export default defineComponent({
    name: 'ArticlesTags',
    components: {
        VButtonRadio: defineAsyncComponent(() => import("@/components/ui/VButtonRadio.vue")),
    },
    setup() {
        // const { t } = useI18n({ useScope: 'global' });
        /* Articles */
        const categories = ['All', 'Insights', 'Case studies', 'Career stories', 'Company news',]
        const category = ref(categories[0])

        return { category, categories }
    }
});
</script>
