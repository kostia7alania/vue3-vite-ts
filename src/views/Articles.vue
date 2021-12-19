<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <section>
      <PageTopSection theme="blue">
        <div class="tw-font-semibold tw-text-6xl tw-leading-tight">Services</div>
        <div
          class="tw-text-lg tw-font-medium tw-leading-7 tw-max-w-5xl"
        >Our team has strong educational credentials, intellectual curiosity, proven leadership capacity and commitment to values. We are analytically rigorous, delivering fact-based advice to get the job done. In doing so, we provide great value for the money price point, always striving to understand and meet the customer's needs as efficiently as possible, with the least negative impact on the environment.</div>
      </PageTopSection>
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'Articles',
  components: {
    PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
  },
});
</script>
