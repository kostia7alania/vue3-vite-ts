<template>
  <div class="tw-relative">
    <!-- slides -->
    <div class="tw-relative tw-z-30">
      <Swiper
        :slides-per-view="1.1"
        :space-between="16"
        :virtual-index="pageActive"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide v-for="(slot, i) of $slots" :key="i">
          <component :is="slot" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// 
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n'

interface ISwiper {
  realIndex: number
  slideTo: (a: number, b?: number) => void
}
export default defineComponent({
  name: 'CardsSwiper',
  components: {
    Swiper,
    SwiperSlide,
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
      pageActive.value = swiperRef.realIndex
    };

    const pageActive = ref(0)

    const slideTo = (index: number) => {
      swiperRef.slideTo(index, 0);
      pageActive.value = index
    }

    return {
      pageActive,
      slideTo,
      onSwiper,
      onSlideChange,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>