<template>
    <!-- key-value="id" -->
    <VTagsToggle
        :model-value="country"
        class="tw-w-full"
        key-label="title"
        :is-select="isSelect"
        :key-value="keyValue"
        :placeholder="$t('Preferred location') + '*'"
        :items="countries"
        @update:model-value="$emit('update:country', $event)"
    />
    <!-- :value-model="country" -->
    <!-- @update:model-value="$emit('update:country', $event)" -->
</template>



<script lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed, defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import VTagsToggle from "@/components/ui/VTagsToggle.vue"
import { useVuex } from '@/store/store'

export default defineComponent({
    name: 'VCountries',
    components: { VTagsToggle, },
    props: {
        country: { type: null, default: undefined },
        keyValue: { type: String, default: undefined },
        isSelect: { type: Boolean, default: false },
        initCountries: { type: Array, default: undefined },
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
        const route = useRoute();

        // access an action
        const countriesAll = computed(() => store.state.countries?.COUNTRIES || [])
        const countries = computed(() => {
            if (route.name === 'team') return teamCategories.value || []
            if (props.initCountries) return props.initCountries || []
            return countriesAll.value || []
        })

        const getCountries = () => store.dispatch('countries/GET_COUNTRIES')
        const init = async () => {
            await getCountries()
            const [res] = await getCountries()
            const { keyValue } = props
            if (props.country) return
            emit('update:country', keyValue ? res[keyValue] : res)
        }

        onMounted(init)

        const breakpoints = useBreakpoints(breakpointsTailwind)
        const xl = breakpoints.smaller('xl')


        const teamCategories = computed(() => {
            const uniq = new Set()
            const teams = store.state.teams?.TEAMS || []
            return teams.reduce((acc, el) => {
                if (uniq.size !== uniq.add(el.country.id).size) {
                    // @ts-ignore
                    acc.push(el.country)
                }
                return acc
            }, [])
        })

        return {
            countries,
            xl,
            teamCategories,
            route
        }
    },
});
</script>
