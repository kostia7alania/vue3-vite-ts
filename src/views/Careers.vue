<template>
  <div>
    <!--
      --------
      @Section #0
      -------- 
    -->
    <section>
      <PageTopSection theme="orange">
        <div class="tw-font-semibold tw-text-6xl tw-leading-tight ">Services</div>
      </PageTopSection>
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'Careers',
  components: {
    PageTopSection: defineAsyncComponent(() => import("@/components/services2/PageTopSection.vue")),
  },
});
</script>
