<template>
    <div class="tw-flex tw-flex-wrap tw-gap-6 tw-text-sm">
        <VButtonRadio
            v-model="category"
            :items="articleCategories"
            key-value="id"
            key-label="title"
            theme="blue"
            active-class="tw-bg-white tw-text-orange-1 active-class"
            inactive-class="inactive-class"
        />
    </div>
</template>

<script lang="ts">
import { watchOnce } from '@vueuse/core';
import { defineComponent, defineAsyncComponent, ref, Ref, watch, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// import { useI18n } from 'vue-i18n'
import { i18n } from '@/plugins/i18n';
import { INew } from '@/store/modules/news/news.d';
import { useVuex } from '@/store/store'


export default defineComponent({
    name: 'ArticlesTags',
    components: {
        VButtonRadio: defineAsyncComponent(() => import("@/components/ui/VButtonRadio.vue")),
    },
    setup() {
        const route = useRoute();
        const router = useRouter()
        // const { t } = useI18n({ useScope: 'global' });
        /* Articles */
        const store = useVuex()

        const hasCategoriesCategory = (categoryValue: string) => {
            const res = categories.value.some((e: INew) => String(e?.id) === String(categoryValue))
            return res
        }


        const categories = computed(() => store.getters['news/GETTER_CATEGORIES'].map((e: INew) => ({ ...e, id: String(e.id) })))

        // const isLoading = computed(() => store.state.news.IS_LOADING)

        const category: Ref<string> = ref(String(route.query?.category || 0))

        const updateQueryCategory = () => {
            const categoryValue = hasCategoriesCategory(category.value) ? category.value : categories.value[0]?.id
            router.push({ ...route, query: { ...route.query, category: categoryValue }, })
        }

        watch(() => category.value, () => {
            updateQueryCategory()
        })

        // const initCategory = () => {
        //     const categoryQuery = String(route.query?.category)
        //     const hasCategory = hasCategoriesCategory(categoryQuery) ? categoryQuery : categories.value[0].id
        //     if (hasCategory) category.value = categoryQuery
        //     else category.value = '0'
        // }

        // after loading the news, we can set category
        // watchOnce(() => isLoading.value, initCategory)

        // onMounted(() => () => {
        //     const categoryQuery = route.query?.category
        //     if (!categoryQuery) return category.value = '0'
        // })


        const articleCategories = computed(() => {
            const uniq = new Set()
            const teams = store.state.news?.ARTICLES || []
            return teams.reduce((acc, el) => {
                if (uniq.size !== uniq.add(el.category.id).size) {
                    acc.push({ ...el.category, id: String(el.category.id) })
                }
                return acc
            }, [{ id: '0', title: i18n.global.t('All') }])
        })

        return { category, articleCategories }
    }
});
</script>
