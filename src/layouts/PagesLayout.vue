<template>
  <!--
    --------
    @Section #0
    -------- 
  -->
  <section>
    <PageTopSection :theme="theme" class="min-h-400px">
      <div v-if="title" class="tw-font-semibold tw-text-6xl tw-leading-tight">{{ title }}</div>
      <div
        v-if="description"
        class="tw-text-lg tw-font-medium tw-leading-7 tw-max-w-5xl"
      >{{ description }}</div>
      <!-- bottom -->
      <div
        v-if="$route.name === 'articles'"
        class="tw-flex tw-flex-wrap tw-gap-6 tw-text-sm tw-mt-16"
      >
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

  <router-view v-slot="{ Component }">
    <transition name="component-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed, ComputedRef, ref } from 'vue';
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
    VButtonRadio: defineAsyncComponent(() => import("@/components/ui/VButtonRadio.vue")),
    PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
  },
  setup() {
    const route = useRoute();
    const { t } = useI18n({ useScope: 'global' });
    const routeName = computed(() => route.name) as ComputedRef<TThemeMap>
    const title = computed(() => t(`top-section.${String(routeName.value)}.title`))
    const description = computed(() => t(`top-section.${String(routeName.value)}.description`))
    const theme = computed(() => themeMap[String(routeName.value)])

    /* Articles */
    const categories = ['All', 'Insights', 'Case studies', 'Career stories', 'Company news',]
    const category = ref(categories[0])

    return {
      title, description, theme, category, categories
    }
  },
});
</script>
