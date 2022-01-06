<template>
  <div class="tw-flex tw-justify-between tw-pt-14">
    <!-- left -->
    <div class="tw-pt-5 tw-basis-full tw-flex-1">
      <div class="tw-font-semibold tw-text-4.35xl lg:tw-text-6xl">
        <div class="tw-max-w-[466px]">{{$t('the challenger advisory')}}</div>
      </div>
      <div class="tw-pt-5 tw-text-gray-2 tw-max-w-sm tw-text-base lg:tw-text-lg tw-font-medium">
        <div>{{$t('fast-based management consulting and market research')}}</div>
      </div>
      <VButton
        text="Our story"
        class="btn-h-48-56 tw-mt-10 lg:tw-mt-15"
        width="200px"
        variant="blue"
      />
    </div>
    <!-- right -->
    <div
      class="tw-flex tw-justify-center tw-w-full tw-px-1 md:tw-px-6 lg:tw-px-0 tw-mt-10 lg:tw-mt-0"
    >
      <ServiceSwipperSlide1Cartoon />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ServiceSwipperSlide1Cartoon from "@/components/services/ServiceSwipperSlide1Cartoon.vue"
import VButton from "@/components/ui/VButton.vue"

export default defineComponent({
  name: 'ServiceSwipper',
  components: {
    ServiceSwipperSlide1Cartoon,
    VButton
  }
});
</script>
