<template>
  <router-link
    :to="{ name: 'main' }"
    class="tw-flex tw-gap-x-3 tw-items-center tw-font-semibold tw-text-lg md:tw-text-2xl"
    :class="{ 'tw-text-white': white }"
  >
    <div class="tw-h-5 tw-w-5 md:tw-h-7 md:tw-w-7 lg:tw-h-9 lg:tw-w-9">
      <VIconSpinner :white="white"/>
    </div>Primelight OU
  </router-link>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

import VIconSpinner from "@/components/ui/VIconSpinner.vue"

export default defineComponent({
  name: 'Logo',
  components: { VIconSpinner },
  props: { white: { type: Boolean, default: false } },
});
</script>
