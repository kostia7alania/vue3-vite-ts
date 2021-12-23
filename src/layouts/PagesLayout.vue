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
    </PageTopSection>
  </section>

  <router-view />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed, ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router';
type TThemeMap = 'services' | 'company' | 'team' | 'careers' | 'contact' | 'financing'

const themeMap: { [key: string]: string } = {
  services: 'blue',
  company: 'blue',
  team: 'orange',
  careers: 'orange',
  contact: 'orange',
  financing: 'blue',
}

export default defineComponent({
  name: 'PagesLayout',
  components: {
    PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
  },
  setup() {
    const route = useRoute();
    const { t } = useI18n({ useScope: 'global' });
    const routeName = computed(() => route.name) as ComputedRef<TThemeMap>
    const title = computed(() => t(`top-section.${String(routeName.value)}.title`))
    const description = computed(() => t(`top-section.${String(routeName.value)}.description`))
    const theme = computed(() => themeMap[String(routeName.value)])

    return {
      title, description, theme
    }
  },
});
</script>
