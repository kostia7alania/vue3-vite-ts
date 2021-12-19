<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <section>
      <PageTopSection theme="blue">
        <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Articles</div>
        <!-- bottom -->
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
    <!--
      --------
      @Section #1
      --------
      Our latest articles
      --------
    -->
    <section class="tw-pt-16 tw-pb-30 tw-px-20 tw-relative">
      <div v-for="el of [1,2,3,4,5,6,7,8,9]" :key="el" class="tw-flex tw-flex-wrap tw-gap-10 tw-relative tw-z-20">
        <ArticleCard
          class="tw-flex-1"
          date="2021-10-30"
          title="OÜ Primelight Challengers - Oleksandr Volik"
        />
        <ArticleCard
          class="tw-flex-1"
          date="2021-10-26"
          title="OÜ Primelight Challengers - Maari Helilaid"
        />
        <ArticleCard
          class="tw-flex-1"
          date="2021-10-09"
          title="OÜ Primelight Challengers - Sevak Hovhannisyan"
        />
      </div>
     </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Articles',
  components: {
    PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    VButtonRadio: defineAsyncComponent(() => import("@/components/ui/VButtonRadio.vue")),
    ArticleCard: defineAsyncComponent(() => import("@/components/articles/ArticleCard.vue")),
  },
  setup() {
    const categories = ['All', 'Insights', 'Case studies', 'Career stories', 'Company news',]
    const category = ref(categories[0])

    return { category, categories }
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