<template>
    <div class="tw-flex tw-justify-center tw-flex-wrap tw-gap-[20px] tw-text-sm">
        <VButtonRadio
            v-if="isSelect ? false : !xl"
            :model-value="modelValue"
            :items="items"
            :key-value="keyValue"
            :key-label="keyLabel"
            @update:model-value="$emit('update:modelValue', $event)"
        />
        <VSelect
            v-else
            :model-value="modelValue"
            :items="items"
            :key-value="keyValue"
            :key-label="keyLabel"
            :class="{
                'tw-w-[343px]': !isSelect,
                'tw-w-full': isSelect,
            }"
            :placeholder="placeholder"
            @update:model-value="$emit('update:modelValue', $event)"
        />
    </div>
</template>



<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineComponent } from 'vue';

import VButtonRadio from "@/components/ui/VButtonRadio.vue"
import VSelect from "@/components/ui/VSelect.vue"
/* 
<TagsToggle  v-model:country="model" />
*/
export default defineComponent({
    name: 'TagsToggle',
    components: {
        VSelect,
        VButtonRadio,
    },
    props: {
        modelValue: { type: null, default: undefined },
        items: { type: Array, default: () => [] },

        placeholder: { type: String, default: undefined },

        keyValue: { type: String, default: undefined },
        keyLabel: { type: String, default: undefined },

        isSelect: { type: Boolean, default: false },
    },
    emits: ['update:modelValue'],
    setup() {
        const breakpoints = useBreakpoints(breakpointsTailwind)
        const xl = breakpoints.smaller('xl')

        return { xl }
    },
});
</script>
