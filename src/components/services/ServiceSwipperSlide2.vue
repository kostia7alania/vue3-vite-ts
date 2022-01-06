<template>
  <div class="tw-flex tw-justify-between tw-pt-14">
    <!-- left -->
    <div class="tw-pt-5 tw-basis-full tw-flex-1">
      <div class="tw-font-semibold tw-text-4.35xl lg:tw-text-6xl">
        <div class="tw-max-w-[466px]">{{ $t('we have estonian roots') }}</div>
      </div>
      <div class="tw-pt-5 tw-text-gray-2 tw-max-w-sm tw-text-base lg:tw-text-lg tw-font-medium">
        <div>{{ $t('with unique central and eastern') }}</div>
        <div class="tw-pt-1">{{ $t('europe and nordics footprint stretching') }} {{$t('over 18 countries throughout europe')}}.</div>
      </div>
      <VButton
        text="Our origin"
        class="btn-h-48-56 tw-mt-10 lg:tw-mt-15"
        width="200px"
        variant="blue"
      />
    </div>
    <!-- right -->
    <div
      class="tw-flex tw-justify-center tw-w-full tw-px-1 md:tw-px-6 lg:tw-px-0 tw-mt-10 lg:tw-mt-0"
    >
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
