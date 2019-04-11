<template>
  <div class="detail-swiper">
    <swiper :options="bannerOption">
      <swiper-slide style="width: 100%;height: 100%;">
        <img style="width: 100%;height: 100%;" src="../../assets/images/banner.png">
      </swiper-slide>
      <swiper-slide style="width: 100%;height: 100%;">
        <img style="width: 100%;height: 100%;" src="../../assets/images/banner1.png">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: { swiper, swiperSlide },
  data() {
    return {
      bannerOption: {
        loop: true,
        autopaly: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          reverseDirection: false,
          waitForTransition: true
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        centeredSlides: true
      }
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.detail-swiper{
    width: 100%;
    height: 7.5rem;
}
.swiper-container{
    width: 100%;
    height: 100%;
}
</style>