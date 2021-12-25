<template>
    <div class="tw-flex tw-justify-center tw-flex-wrap tw-gap-[20px] tw-text-sm">
        <VButtonRadio v-if="!xl" v-model="country" :items="countries" />
        <VSelect
            v-else
            v-model="country"
            class="tw-w-[343px]"
            placeholder="Preferred location*"
            :items="countries"
        />
    </div>
</template>



<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineComponent, onMounted, ref } from 'vue';

import VButtonRadio from "@/components/ui/VButtonRadio.vue"
import VSelect from "@/components/ui/VSelect.vue"

export default defineComponent({
    name: 'TagsToggle',
    components: {
        VSelect,
        VButtonRadio,
    },
    emits: ['ready'],
    setup(_, { emit }) {
        onMounted(() => emit('ready'))

        const countries = [
            'INTERNATIONAL',
            'ESTONIA',
            'LITHUANIA',
            'LATVIA',
            'FINLAND',
            'DENMARK',
            'POLAND',
            'SLOVAKIA',
            'UKRAINE',
            'ROMANIA',
            'MOLDOVA',
            'RUSSIA',
            'BELARUS',
            'SERBIA',
            'BULGARIA',
            'NORTH MACEDONIA',
            'KOSOVO',
            'ARMENIA',
        ]


        const country = ref(countries[0])


        const breakpoints = useBreakpoints(breakpointsTailwind)
        const xl = breakpoints.smaller('xl')

        return {
            countries,
            country,
            xl
        }
    },
});
</script>
