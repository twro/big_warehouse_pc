<template>
  <div class="bs-box">
    <div class="bs-wrap">
      <div class="menu-wrapper" ref="menuWrapper">
        <div class="menu-inner">
          <ul>
            <li
              class="menu-item"
              v-for="(item, index) in 20"
              :key="index"
              :class="{active:activeIndex == index}"
              @click="tabClickIndex(index,$event)"
              ref="menuList"
            >{{index}}</li>
          </ul>
        </div>
      </div>
      <div class="shop-wrapper" ref="shopWrapper">
        <div class="shop-inner">
          <ul ref="itemList">
            <li class="shops-li" v-for="(item, index) in 20" :key="index" ref="rightLi">
              <div class="ships-item">test{{index}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  components: {},
  data() {
    return {
      //   activeIndex: 0,
      scrollY: 0, //右侧列表滑动的y轴坐标
      rightLiTops: [], //所有分类头部位置
      // leftBscroll: null,
      // rightBscroll: null
    };
  },
  computed: {
    activeIndex() {
      const { scrollY, rightLiTops } = this;
      return rightLiTops.findIndex((tops, index) => {
        this._initLeftScroll(index);
        return scrollY >= tops && scrollY < rightLiTops[index + 1];
      });
    }
  },
  watch: {},
  methods: {
    tabClickIndex(index, e) {
      if (!e._constructed) {
        return;
      }
      //   this.activeIndex = index;
      // 这是滚动到相对的位置
      // this.scrollY = this.rightLiTops[index];
      // this.rightBscroll.scrollTo(0, -this.scrollY, 300);
      // 这个是滚动到相对的元素位置
      let alllist = this.$refs.itemList.querySelectorAll(".shops-li");
      let el = alllist[index];
      console.log(el)
      this.rightBscroll.scrollToElement(el, 300);
    },
    _initBScroll() {
      var self = this;
      this.leftBscroll = new BScroll(this.$refs.menuWrapper, {
        click: true,
        taps: true,
        bounce:false
      });
      this.rightBscroll = new BScroll(this.$refs.shopWrapper, {
        probeType: 3,
        bounce:false
      });
      this.rightBscroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _initRightHeight() {
      let itemArray = []; //定义一个伪数组
      let top = 0;
      itemArray.push(top);
      let alllist = this.$refs.itemList.querySelectorAll(".shops-li");
      Array.prototype.slice.call(alllist).forEach(li => {
        top += li.clientHeight;
        itemArray.push(top);
      });
      this.rightLiTops = itemArray;
    },
    _initLeftScroll(index) {
      let menu = this.$refs.menuList;
      let el = menu[index];
      this.leftBscroll.scrollToElement(el, 300, 0, -300);
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this._initBScroll();
      this._initRightHeight();
    });
  }
};
</script>
<style lang='less' scoped>
.bs-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.bs-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 54px;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 1.8rem;
    height: 100%;
    text-align: center;
    background: #f8f8f8;
  }
  .menu-inner {
    width: 100%;
    // height: 100%;
    // overflow-x: hidden;
    // overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .menu-item {
    width: 100%;
    height: 0.88rem;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    position: relative;
    transition: all 0.5s;
    &::after {
      content: "";
      display: block;
      width: 0.04rem;
      height: 0;
      opacity: 0;
      transition: all 1s;
      background: #f5215a;
      position: absolute;
      left: 0;
      top: 0;
    }
    &.active {
      background: #fff;
    }
    &.active::after {
      height: 0.88rem;
      opacity: 1;
      transition: all 0.5s;
    }
  }

  .shop-wrapper {
    flex: 1;
    margin-left: 10px;
    overflow: hidden;
    // overflow-y: scroll;
  }
  .shop-inner {
    width: 100%;
    // height: 100%;
    // background: #fff;
    ul {
      width: 100%;
      height: 100%;
    }
  }
  .shops-li {
    width: 100%;
    height: 200px;
    background: #f5215a;
  }
}
</style>