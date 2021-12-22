<template>
  <div class="tw-flex tw-justify-between tw-pt-14">
    <!-- left -->
    <div class="tw-pt-5 tw-basis-full tw-flex-1">
      <div class="tw-font-semibold tw-text-4.35xl lg:tw-text-6xl">
        <div>We have</div>
        <div>Estonian roots</div>
      </div>
      <div class="tw-pt-5 tw-text-gray-2 tw-max-w-sm tw-text-base lg:tw-text-lg tw-font-medium">
        <div>With unique Central and Eastern</div>
        <div class="tw-pt-1">Europe & Nordics footprint stretching</div>
        <div class="tw-pt-1">over 18 countries throughout Europe.</div>
      </div>
      <VButton
        text="Our origin"
        class="btn-h-48-56 tw-mt-10 lg:tw-mt-15"
        width="200px"
        variant="blue"
      />
    </div>
    <!-- right -->
    <div class="tw-flex tw-justify-center tw-w-full tw-px-1 md:tw-px-6 lg:tw-px-0 tw-mt-10 lg:tw-mt-0">
      <ServiceSwipperSlide2Cartoon />
    </div>
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
