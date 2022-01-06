<template>
  <!--
    --------
    @Section #0
    -------- 
  -->
  <section>
    <PageTopSection
      :theme="theme"
      class="tw-flex tw-flex-col min-h-400px tw-h-[474] md:tw-h-[464] xl:tw-h-[400]"
      :class="{
        'tw-justify-center': $route.name !== 'articles',
        'tw-justify-end tw-pb-15': $route.name === 'articles'
      }"
    >
      <div v-if="title" class="text-40px-60px-60px tw-font-semibold tw-leading-tight">{{ title }}</div>
      <div
        v-if="description"
        class="text-16px-18px-18px tw-font-medium tw-leading-7 tw-max-w-5xl tw-mt-4 xl:tw-mt-5"
      >{{ description }}</div>
      <!-- bottom -->
      <ArticlesTags v-if="$route.name === 'articles'" class="tw-mt-8 md:tw-mt-10 xl:tw-mt-16" />
    </PageTopSection>
  </section>

  <router-view v-slot="{ Component }">
    <transition name="component-fade" mode="out-in">
      <component :is="Component" @ready="$emit('ready')" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed, ComputedRef, } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router';
type TThemeMap = 'services' | 'company' | 'team' | 'careers' | 'contact' | 'financing'

const themeMap: { [key: string]: string } = {
  services: 'blue',
  company: 'blue',
  team: 'orange',
  careers: 'orange',
  contact: 'orange',
  articles: 'blue',
  financing: 'blue',
}

export default defineComponent({
  name: 'PagesLayout',
  components: {
    PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
    ArticlesTags: defineAsyncComponent(() => import("@/components/articles/ArticlesTags.vue")),
  },
  emits: ['ready'],
  setup() {
    const route = useRoute();
    const { t } = useI18n({ useScope: 'global' });
    const routeName = computed(() => route.name) as ComputedRef<TThemeMap>
    const title = computed(() => t(`top-section.${String(routeName.value)}.title`))
    const description = computed(() => t(`top-section.${String(routeName.value)}.description`))
    const theme = computed(() => themeMap[String(routeName.value)])


    return {
      title, description, theme,
    }
  },
});
</script>
