<template>
    <!-- tw-h-60 -->
    <div class="h-400px tw-overflow-hidden gray-shadow-1 tw-bg-white tw-rounded-4xl tw-relative">
        <img
            v-if="+image === 1"
            class="tw-w-full"
            src="@/assets/images/team/1.png"
            alt="Adam Saulius Vaina"
        />
        <img
            v-else-if="+image === 2"
            class="tw-w-full"
            src="@/assets/images/team/2.png"
            alt="Adam Saulius Vaina"
        />
        <img
            v-else-if="+image === 3"
            class="tw-w-full"
            src="@/assets/images/team/3.png"
            alt="Riivo Anton"
        />
        <img
            v-else-if="+image === 4"
            class="tw-w-full"
            src="@/assets/images/team/4.png"
            alt="Roman Khlibun"
        />
        <img
            v-else-if="+image === 5"
            class="tw-w-full"
            src="@/assets/images/team/5.png"
            alt="Alexandra Sferle"
        />
        <img
            v-else-if="+image === 6"
            class="tw-w-full"
            src="@/assets/images/team/6.png"
            alt="Gundega Ēlerte"
        />

        <div class="card-bottom tw-w-full tw-p-6 tw-text-gray-1 tw-absolute tw-bottom-0">
            <div class="tw-text-2xl tw-font-semibold">
                <!-- number -->
                {{ title }}
            </div>
            <div class="tw-flex tw-items-center tw-font-medium tw-pt-3">{{ description }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
    name: "TeamCard",
    props: {
        title: { type: [Number, String], default: '', },
        description: { type: [Number, String], default: "", },
        image: { type: [Number, String], default: "1", },
    },
});
</script>



<style lang="scss" scoped>
.card-bottom {
    background: rgba(55, 114, 255, 0.8);
    backdrop-filter: blur(10px);
}

.h-400px {
    height: 400px;
}
</style>