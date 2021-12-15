<template>
  <div class="tw-flex tw-justify-between tw-px-40 tw-pt-14">
    <!-- left -->
    <div class="tw-pt-20">
      <div class="tw-font-semibold tw-text-6xl">
        <div>We have</div>
        <div>Estonian roots</div>
      </div>
      <div class="tw-pt-5 tw-text-gray-2 tw-text-lg tw-font-medium">
        <div>With unique Central and Eastern</div>
        <div class="tw-pt-1">Europe & Nordics footprint stretching</div>
        <div class="tw-pt-1">over 18 countries throughout Europe.</div>
      </div>
      <VButton text="Our origin" class="tw-mt-14" variant="blue" />
    </div>
    <!-- right -->
    <ServiceSwipperSlide2Cartoon />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'ServiceSwipper',
  components: {
    ServiceSwipperSlide2Cartoon: defineAsyncComponent(() => import("@/components/services/ServiceSwipperSlide2Cartoon.vue")),
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
  }
});
</script>
