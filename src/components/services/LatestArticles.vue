<template>
  <div>
    <h2 class="topic-title max-w-400px my-120-80">{{ title ? title : $t('Our latest articles') }}</h2>
    <div v-if="latestArticles.length">
      <div v-if="!md" class="gap-40px-16px tw-flex">
        <!-- DESKTOP -->

        <ArticleCard
          v-for="article of latestArticles"
          :id="article.id"
          :key="article.id"
          :img="article.cover"
          :date="article.publish_at"
          :title="article.title"
          class="md:tw-basis-[400px] tw-grow-1 tw-shrink-1"
        />
      </div>
      <CardsSwiper v-else>
        <!-- MOBILE -->

        <!-- @vue-ignore -->
        <template v-for="(article, i) of latestArticles" :id="article.id" #[i] :key="article.id">
          <ArticleCard
            :id="article.id"
            class="article-card-swiper"
            :img="article.cover"
            :date="article.publish_at"
            :title="article.title"
          />
        </template>
      </CardsSwiper>
    </div>
    <div v-else-if="isLoading" class="tw-flex tw-items-center tw-justify-center">
      <VIconSpinner class="tw-h-20" spin />
    </div>
    <div v-else>{{ $t('We have no latest articles at the time') }}</div>
  </div>
</template>

<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed, defineAsyncComponent, defineComponent, onMounted, ref, } from 'vue';

import CardsSwiper from "@/components/services/CardsSwiper.vue"
import VIconSpinner from "@/components/ui/VIconSpinner.vue"
import { useVuex } from '@/store/store'

export default defineComponent({
  name: 'LatestArticles',
  components: {
    CardsSwiper,
    VIconSpinner,
    ArticleCard: defineAsyncComponent(() => import("@/components/articles/ArticleCard.vue")),
  },
  props: {
    title: { type: String, default: '' },
    category: { type: String, default: '' }
  },
  setup(props) {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const md = breakpoints.smaller('lg')

    const store = useVuex()

    const countLatestArticles = 3

    const latestArticles = computed(() => {
      return store.getters['news/GETTER_LATEST_ARTICLES']({ count: countLatestArticles, category: props.category }) || {}
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

    return {
      md,
      isLoading,
      latestArticles
    }
  }
});
</script>
