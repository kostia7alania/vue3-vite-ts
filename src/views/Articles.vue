<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <!--
      <section>
      <PageTopSection theme="blue" class="min-h-400px">
      <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Articles</div>
      <div class="tw-flex tw-flex-wrap tw-gap-6 tw-text-sm tw-mt-16">
      <VButtonRadio
      v-model="category"
      :items="categories"
      theme="blue"
      active-class="tw-bg-white tw-text-orange-1 active-class"
      inactive-class="inactive-class"
      />
      </div>
      </PageTopSection>
      </section>
    -->
    <!--
      --------
      @Section #1
      --------
      Our latest articles
      --------
    -->
    <section class="px-16px-48px-80px tw-pt-20 xl:tw-pt-24 xl:tw-pb-30 tw-pb-40">
      <div
        v-if="articles.length"
        class="max-layout-width tw-flex tw-flex-wrap tw-gap-10 tw-justify-start"
      >
        <div
          v-for="article of articles"
          :key="article.id"
          class="md:tw-basis-[400px] tw-max-w-[555px] tw-grow-1 tw-shrink-1 tw-w-full"
        >
          <ArticleCard
            :id="article.id"
            :img="article.cover"
            :date="article.publish_at"
            :title="article.title"
          />
        </div>
      </div>
      <div v-else-if="isLoading" class="tw-flex tw-items-center tw-justify-center">
        <VIconSpinner class="tw-h-20" spin />
      </div>
      <div v-else>{{ $t('We have no articles in the selected category') }}</div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, } from 'vue';
import { useRoute, } from 'vue-router';

import ArticleCard from "@/components/articles/ArticleCard.vue"
import VIconSpinner from "@/components/ui/VIconSpinner.vue"
import { useVuex } from '@/store/store'

export default defineComponent({
  name: 'Articles',
  components: {
    ArticleCard, VIconSpinner,
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    // VButtonRadio: defineAsyncComponent(() => import("@/components/ui/VButtonRadio.vue")),
    // ArticleCard: defineAsyncComponent(() => import("@/components/articles/ArticleCard.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    onMounted(() => emit('ready'))
    const store = useVuex()
    const route = useRoute();

    const categoryId = computed(() => String(route.query?.category))

    const articles = computed(() => {
      const { news } = store.state
      if (news?.ARTICLES) return news.ARTICLES.filter(item => {
        if (!+categoryId.value) return true // all
        return String(item.id) === categoryId.value
      })
      return []
    })



    const isLoading = ref(false)

    // window.store = store
    const getNews = async () => {
      isLoading.value = true
      try {
        await store.dispatch('news/GET_ARTICLES')
      } catch (err) {
        console.error({ err })
      } finally {
        isLoading.value = false
      }
    }

    onMounted(getNews)

    return { isLoading, articles }
  },
});
</script>

<style lang="scss" scoped>
::v-deep {
  .active-class {
    padding-left: 16px;
    padding-right: 16px;
    border-color: transparent;
  }
  .inactive-class {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>