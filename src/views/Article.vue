<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <section>
      <PageTopSection
        theme="blue"
        class="min-h-400px tw-flex tw-flex-col tw-justify-end lg:tw-justify-center"
      >
        <div class="max-layout-width-overflow-auto">
          <div class="tw-text-gray-1 tw-font-medium">
            <div
              class="tw-text-base xl:tw-text-lg tw-mt-15 lg:tw-mt-0"
            >{{ dateFormat(article.publish_at) }}</div>
            <div
              class="tw-font-semibold tw-leading-10 tw-text-3xl xl:tw-text-5xl tw-mt-4 xl:tw-mt-5"
            >{{ article.title }}</div>
            <VButton
              class="tw-mt-8 tw-mb-12 tw-bg-white tw-border-0 tw-block lg:tw-hidden"
              variant="orange-1"
              :text="$t('Back')"
              width="180px"
              @click="$router.push({ name: 'articles' })"
            />
          </div>
        </div>
      </PageTopSection>
    </section>
    <!--
      --------
      @Section #1
      --------
      article
      --------
    -->

    <section class="px-16px-48px-80px tw-pt-16 tw-pb-20 xl:tw-pb-30 tw-flex tw-flex-col tw-gap-y-4">
      <div class="-overflow-auto-overflow-auto">
        <!--  -->
        <div v-if="article?.content?.length" class="tw-flex tw-flex-col tw-gap-y-4">
          <div v-for="(item, i) of article.content" :key="i" class="tw-flex">
            <div
              class="tw-flex-grow-0 tw-hidden lg:tw-block"
              :class="{
                'tw-basis-[333px]': item.type !== 'image_fullscreen',
                'tw-basis-[0px]': item.type === 'image_fullscreen',
              }"
            >
              <div class="tw-w-full">
                <VButton
                  v-if="!i"
                  variant="orange-2"
                  :text="$t('Back')"
                  width="180px"
                  @click="$router.push({ name: 'articles' })"
                />
              </div>
            </div>
            <div
              class="tw-flex-1 tw-font-medium"
              :class="{
                'tw-max-w-3xl': item.type !== 'image_fullscreen',
              }"
            >
              <Markdown v-if="item.type === 'text_only'" :source="item.content.text" />
              <div v-else-if="item.type === 'image_fullscreen'">
                <img :src="item.content.image" :alt="article.title" />
              </div>
              <div v-else-if="item.type === 'image_container'">
                <img :src="item.content.image" :alt="article.title" />
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="isLoading" class="tw-flex tw-items-center tw-justify-center tw-mt-10">
          <VIconSpinner class="tw-h-20" spin />
        </div>
        <div v-else>{{ $t('We have no content in the selected article') }}</div>
        <!--  -->
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, onMounted, ref } from 'vue';
import { useRoute, } from 'vue-router';
//@ts-ignore
import Markdown from 'vue3-markdown-it';
import 'highlight.js/styles/monokai.css';

import { dateFormat } from '@/utils/dateFormat'

import PageTopSection from "@/components/services2/PageTopSection.vue"
import VIconSpinner from "@/components/ui/VIconSpinner.vue"
import { useVuex } from '@/store/store'

export default defineComponent({
  name: 'Article',
  components: {
    PageTopSection,
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
    VIconSpinner, Markdown
  },
  emits: ['ready'],
  setup(_, { emit }) {
    const store = useVuex()
    const route = useRoute();

    const isLoading = ref(false)

    const article = computed(() => {
      const articleId = route.params?.id
      return store.getters['news/GETTER_ARTICLE'](articleId) || {}
    })

    const getArticle = async () => {
      const articleId = route.params?.id

      isLoading.value = true
      try {
        await store.dispatch('news/GET_ARTICLE', articleId)
      } catch (err) {
        console.error({ err })
      } finally {
        isLoading.value = false
      }
    }

    onMounted(() => {
      emit('ready')
      getArticle()
    })

    return {
      article, isLoading, dateFormat
    }
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