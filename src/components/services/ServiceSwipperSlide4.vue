<template>
  <div class="tw-flex tw-justify-between tw-px-40 tw-pt-14">
    <!-- left -->
    <div class="tw-pt-20">
      <div class="tw-font-semibold tw-text-6xl">
        <div>Establishes its</div>
        <div>Armenian presence</div>
      </div>
      <div class="tw-pt-5 tw-text-gray-2 tw-text-lg tw-font-medium">
        <div>The new office in Yerevan strengthens</div>
        <div class="tw-pt-1">the company’s regional position.</div>
      </div>
      <VButton text="Our story" class="tw-mt-14" variant="blue" />
    </div>
    <!-- right -->
    <ServiceSwipperSlide4Cartoon />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'ServiceSwipper',
  components: {
    ServiceSwipperSlide4Cartoon: defineAsyncComponent(() => import("@/components/services/ServiceSwipperSlide4Cartoon.vue")),
    VButton: defineAsyncComponent(() => import("@/components/ui/VButton.vue")),
  }
});
</script>
