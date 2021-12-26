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
      <div class="tw-flex tw-flex-wrap tw-gap-10 tw-justify-center">
        <div
          v-for="el of [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="el"
          class="md:tw-basis-[400px] tw-grow-1 tw-shrink-1"
        >
          <ArticleCard
            date="2021-10-30"
            title="OÜ Primelight Challengers - Oleksandr Volik"
            @click="$router.push({ name: 'article', params: { id: 0 } })"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, } from 'vue';

import ArticleCard from "@/components/articles/ArticleCard.vue"

export default defineComponent({
  name: 'Articles',
  components: {
    ArticleCard,
    // PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    // VButtonRadio: defineAsyncComponent(() => import("@/components/ui/VButtonRadio.vue")),
    // ArticleCard: defineAsyncComponent(() => import("@/components/articles/ArticleCard.vue")),
  },
  emits: ['ready'],
  setup(_, { emit }) {
    onMounted(() => emit('ready'))

    // const categories = ['All', 'Insights', 'Case studies', 'Career stories', 'Company news',]
    // const category = ref(categories[0])

    // return { category, categories }
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