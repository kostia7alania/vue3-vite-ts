<template>
  <CardFlip class="tw-h-full tw-w-full">
    <template #back>
      <div
        :class="{
          'tw-bg-orange-1': theme === 'orange',
          'tw-bg-blue-1': theme === 'blue',
          'tw-justify-between': showButton && !toBottom,
          'tw-justify-center': !showButton && !toBottom,
          'tw-justify-end': toBottom,
        
        }"
        class="tw-h-full tw-w-full tw-flex tw-flex-col tw-text-white tw-p-8 tw-rounded-4xl"
      >
        <div class="tw-text-left">
          <div
            class="tw-font-semibold"
            :class="
              {
                'tw-text-2xl tw-leading-8': showButton,
                'tw-text-2xl tw-leading-10': !showButton,
              }
            "
          >{{ title }}</div>
          <div
            :class="
              {
                ' md:tw-text-sm': !showButton,
              }
            "
            class="tw-mt-4 tw-text-sm tw-leading-6"
          >{{ description }}</div>
        </div>
        <router-link v-if="showButton" :to="{ name: 'company' }">
          <VButton
            class="tw-mt-3 tw-min-h-[48px] tw-w-2/3 lg:tw-w-full tw-border-1"
            text="Apply now"
            :variant="theme === 'blue' ? 'blue' : 'orange-2'"
            height="48px"
          />
        </router-link>
      </div>
    </template>
    <!-- :hover -->
    <template #front>
      <div class="tw-h-full tw-w-full tw-text-white tw-rounded-4xl tw-relative">
        <!-- services (main page)  -->
        <img
          v-if="image === 'experienced-professionals'"
          class="front-img"
          src="@/assets/images/experienced-professionals.png"
          alt="Experienced professionals"
        />
        <img
          v-else-if="image === 'students-and-graduates'"
          class="front-img"
          src="@/assets/images/students-and-graduates.jpg"
          alt="Experienced professionals"
        />
        <!-- company's page  -->
        <img
          v-else-if="image === 'adventure'"
          class="front-img"
          src="@/assets/images/careers/adventure.jpg"
          alt="Adventure"
        />
        <img
          v-else-if="image === 'flexibility'"
          class="front-img"
          src="@/assets/images/careers/flexibility.jpg"
          alt="Flexibility"
        />
        <img
          v-else-if="image === 'intellectual-challenge'"
          class="front-img"
          src="@/assets/images/careers/intellectual-challenge.jpg"
          alt="intellectual challenge"
        />
        <img
          v-else-if="image === 'non-hierarchical-organization'"
          class="front-img"
          src="@/assets/images/careers/non-hierarchical-organization.jpg"
          alt="non hierarchical organization"
        />
        <img
          v-else-if="image === 'fun'"
          class="front-img"
          src="@/assets/images/careers/fun.jpg"
          alt="fun"
        />
        
        <img
          v-else-if="image === '1-fast-based.png'"
          class="front-img"
          src="@/assets/images/company/1-fast-based.png"
          alt="fun"
        />

        <img
          v-else-if="image === '3-practical.png'"
          class="front-img"
          src="@/assets/images/company/3-practical.png"
          alt="fun"
        />
        <img
          v-else-if="image === '4-bold-and-innovative.png'"
          class="front-img"
          src="@/assets/images/company/4-bold-and-innovative.png"
          alt="fun"
        />
        <img
          v-else-if="image === '5-flexible.png'"
          class="front-img"
          src="@/assets/images/company/5-flexible.png"
          alt="fun"
        />

        <div
          class="front-img tw-absolute tw-z-10 tw-top-0"
          :class="
            {
              'bg-gradient-blue-1': theme === 'blue',
              'bg-gradient-orange-1': theme === 'orange',
            }
          "
        />

        <div
          class="tw-w-2/3 lg:tw-w-4/5 tw-font-semibold tw-leading-8 tw-text-left tw-absolute tw-z-20 tw-bottom-0 tw-p-8"
          :class="
            {
              'tw-text-2xl tw-leading-8': showButton,
              'tw-text-1.5xl tw-leading-6': !showButton,
            }
          "
        >{{ title }}</div>
      </div>
    </template>
  </CardFlip>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, } from 'vue';


export default defineComponent({
  name: "CardInfoAnim",
  components: {
    VButton: defineAsyncComponent(() => import('@/components/ui/VButton.vue')),
    CardFlip: defineAsyncComponent(() => import('@/components/services/CardFlip.vue')),
  },
  props: {
    title: { type: [Number, String], default: '', },
    description: { type: [Number, String], default: "", },
    theme: { type: String, default: "", }, // blue orange
    image: { type: String, default: "", }, // @/assets/images/experienced-professionals.png
    showButton: { type: Boolean, default: false, },
    toBottom: { type: Boolean, default: false, },
  },
  emits: ['click'],

});
</script>



<style lang="scss" scoped>
.card-info__content {
  max-width: 336px;
}

.front-img {
  @apply tw-w-full tw-h-full tw-rounded-4xl tw-object-cover;
}
</style>