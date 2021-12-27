<template>
    <!-- key-value="id" -->
    <VTagsToggle
        :model-value="country"
        key-label="title"
        :key-value="keyValue"
        placeholder="Preferred location*"
        :items="countries.COUNTRIES"
        @update:model-value="$emit('update:country', $event)"
    />
    <!-- :value-model="country" -->
    <!-- @update:model-value="$emit('update:country', $event)" -->
</template>



<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineComponent, onMounted } from 'vue';

import VTagsToggle from "@/components/ui/VTagsToggle.vue"
import { useVuex } from '@/store/store'

export default defineComponent({
    name: 'VCountries',
    components: { VTagsToggle, },
    props: {
        country: { type: null, default: undefined },
        keyValue: { type: String, default: undefined },
    },
    emits: ['ready', 'update:country'],
    setup(props, { emit }) {
        onMounted(() => emit('ready'))

        // const countries = [
        //     'INTERNATIONAL',
        //     'ESTONIA',
        //     'LITHUANIA',
        //     'LATVIA',
        //     'FINLAND',
        //     'DENMARK',
        //     'POLAND',
        //     'SLOVAKIA',
        //     'UKRAINE',
        //     'ROMANIA',
        //     'MOLDOVA',
        //     'RUSSIA',
        //     'BELARUS',
        //     'SERBIA',
        //     'BULGARIA',
        //     'NORTH MACEDONIA',
        //     'KOSOVO',
        //     'ARMENIA',
        // ]

        const store = useVuex()

        // access an action
        const countries = store.state.countries

        const getCountries = () => store.dispatch('countries/GET_COUNTRIES')
        const init = async () => {
            await getCountries()
            const [res] = await getCountries()
            const { keyValue } = props
            emit('update:country', keyValue ? res[keyValue] : res)
        }

        onMounted(init)

        const breakpoints = useBreakpoints(breakpointsTailwind)
        const xl = breakpoints.smaller('xl')

        return {
            countries,
            xl
        }
    },
});
</script>
