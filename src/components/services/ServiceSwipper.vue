<template>
  <div class="tw-relative">
    <!-- bg left -->
    <div class="tw-absolute tw-z-10">
      <BgPatternBottomLeft />
    </div>
    <!-- bg right -->
    <div class="tw-absolute tw-z-0 tw--top-20 tw--right-40">
      <BgPatternTopRight />
    </div>
    <!-- slides -->
    <div class="tw-relative tw-z-30">
      <Swiper
        :slides-per-view="1"
        :space-between="0"
        :virtual-index="pageActive"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide>
          <ServiceSwipperSlide1 class="px-160px tw-flex-wrap lg:tw-flex-nowrap" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceSwipperSlide2 class="px-160px tw-flex-wrap lg:tw-flex-nowrap" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceSwipperSlide3 class="px-160px tw-flex-wrap lg:tw-flex-nowrap" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceSwipperSlide4 class="px-160px tw-flex-wrap lg:tw-flex-nowrap" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div
      class="swiper-footer tw-flex tw-gap-2 md:tw-gap-3 lg:tw-gap-4 tw-px-2 md:tw-px-0 tw-justify-center tw-items-center tw-h-15 tw-text-sm tw-font-medium tw-text-gray-2"
    >
      <div
        v-for="page of pages"
        :key="page.value"
        :class="{ 'active-page tw-relative tw-font-semibold tw-text-black-1': page.value === pageActive }"
      >
        <button class="tw-py-5" @click="slideTo(page.value)">{{ page.title }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// 
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n'

interface ISwiper {
  realIndex: number
  slideTo: (a: number, b?: number) => void
}
export default defineComponent({
  name: 'ServiceSwipper',
  components: {
    Swiper,
    SwiperSlide,
    ServiceSwipperSlide1: defineAsyncComponent(() => import("@/components/services/ServiceSwipperSlide1.vue")),
    ServiceSwipperSlide2: defineAsyncComponent(() => import("@/components/services/ServiceSwipperSlide2.vue")),
    ServiceSwipperSlide3: defineAsyncComponent(() => import("@/components/services/ServiceSwipperSlide3.vue")),
    ServiceSwipperSlide4: defineAsyncComponent(() => import("@/components/services/ServiceSwipperSlide4.vue")),
    BgPatternBottomLeft: defineAsyncComponent(() => import("@/components/patterns/BgPatternBottomLeft.vue")),
    BgPatternTopRight: defineAsyncComponent(() => import("@/components/patterns/BgPatternTopRight.vue")),
  },
  setup() {
    const { t
      // , locale
    } = useI18n({ useScope: 'global' });

    let swiperRef: ISwiper
    const onSwiper = (swiperInstance: ISwiper) => {
      // console.log({ swiper });
      swiperRef = swiperInstance
    };
    const onSlideChange = (e: ISwiper) => {
      console.log('slide change', { e }, swiperRef.realIndex);
      pageActive.value = swiperRef.realIndex
    };

    const pageActive = ref(0)

    const slideTo = (index: number) => {
      swiperRef.slideTo(index, 0);
      pageActive.value = index
    }

    const pages = ref([
      { value: 0, title: t('services.our story') },
      { value: 1, title: t('services.our origin') },
      { value: 2, title: t('services.our approach') },
      { value: 3, title: t('services.our news') },
    ])

    return {
      pageActive,
      pages,
      slideTo,
      onSwiper,
      onSlideChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper-footer {
  background: linear-gradient(
    90deg,
    rgba(243, 242, 245, 0) 0%,
    #f3f2f5 48.75%,
    rgba(243, 242, 245, 0) 100%
  );

  .active-page {
    &:before {
      content: " ";
      position: absolute;
      background: #21242c;
      width: 100%;
      height: 4px;
      top: 1px;
      border-bottom-left-radius: 23px;
      border-bottom-right-radius: 23px;
    }
  }
}
</style>