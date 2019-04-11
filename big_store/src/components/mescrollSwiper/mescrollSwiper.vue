<template>
  <div class="mescroll-swiper">
    <div class="scrollx mscroll-touch-x">
      <div id="scrollContent" class="scrollx-content" ref="scrollContent">
        <ul id="nav" class="nav">
          <li
            :class="index == curNavIndex?'active':''"
            v-for="(item, index) in typeNavList"
            :key="index"
            ref="itemLi"
            @click="changePage(index,item.SysNo)"
          >{{item.Type}}</li>
        </ul>
      </div>
    </div>
    <mescroll-vue ref="mescroll" @init="mescrollInit" :down="mescrollDown" :up="mescrollUp">
      <div class="data-list" id="dataList">
        <ul class="data-lisyul">
          <router-link to="/index">
            <li class="data-list-li" v-for="(item, index) in dataList" :key="index">{{item.Title}}</li>
          </router-link>
        </ul>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  components: {
    MescrollVue
  },
  data() {
    return {
      curNavIndex: 0,
      mescroll: null,
      pdType: null,
      typeNavList: [],
      dataList: [],
      mescrollDown: {
        htmlContent:
          '<img class="downwarp-slogan" src="./static/mscrollImg/mescroll-load.gif">'
      },
      mescrollUp: {
        callback: this.upCallback,
        page: {
          num: 0,
          size: 10
        },
        noMoreSize: 5,
        toTop: {
          wrapId: "dataList",
          src: "./static/mscrollImg/mescroll-totop.png",
          offset: 600
        },
        htmlNodata: '<p class="upwarp-nodata">无更多数据</p>',
        empty: {
          warpId: "dataList",
          tip: "无更多数据"
        },
        lazyLoad: {
          use: true // 是否开启懒加载,默认false
        }
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter();
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave();
    next();
  },
  computed: {},
  watch: {},
  methods: {
    getTypeList() {
      this.axios
        .get(
          "https://app.shunyingglobal.cn/B2CApp/Common.svc/GetOneSharingGood",
          {
            params: {
              SysNo: 0,
              key: "",
              currentPage: 1,
              pageSize: 10
            }
          }
        )
        .then(res => {
          this.typeNavList = res.data.Data.Type;
          this.pdType = this.typeNavList[0].SysNo;
        });
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    changePage(i, type) {
      if (this.curNavIndex != i) {
        this.pdType = type;
        this.curNavIndex = i;
        let scrollxContent = this.$refs.scrollContent;
        let itemLi = this.$refs.itemLi[i];
        // 起始位置
        const star = scrollxContent.scrollLeft;
        // 结束位置
        var end = Math.floor(
          itemLi.offsetLeft +
            Math.floor(itemLi.clientWidth / 2) -
            Math.floor(document.body.clientWidth / 2)
        );
        //居中以及自动切换
        this.mescroll.getStep(
          star,
          end,
          (step, timer) => {
            scrollxContent.scrollLeft = step;
          },
          500
        );
        this.dataList = [];
        // 刷新列表数据
        this.mescroll.resetUpScroll(); // 刷新列表数据
      }
    },
    // 上啦回调以及请求更多数据
    upCallback(page, mescroll) {
      this.getListDataFromNet(
        this.pdType,
        page.num,
        page.size,
        arr => {
          if (page.num == 1) this.dataList = [];
          this.dataList = this.dataList.concat(arr);
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length);
          });
        },
        () => {
          mescroll.endErr();
        }
      );
    },
    // 数据请求
    getListDataFromNet(
      pdType,
      pageNum,
      pageSize,
      successCallback,
      errorCallback
    ) {
      this.axios
        .get(
          "https://app.shunyingglobal.cn/B2CApp/Common.svc/GetOneSharingGood",
          {
            params: {
              SysNo: pdType,
              key: "",
              currentPage: pageNum,
              pageSize: pageSize
            }
          }
        )
        .then(res => {
          //   console.log(res);
          // 模拟延时,随机生成1000以内的数字
          const time = Math.floor(Math.random() * 500 + 500);
          setTimeout(() => {
            successCallback(res.data.Data.Content);
          }, time);
        })
        .catch(e => {
          errorCallback && errorCallback();
        });
    }
  },
  created() {},
  mounted() {
    // 获取分类
    this.getTypeList();
  }
};
</script>
<style lang='less' scoped>
.scrollx {
  width: 100%;
  height: 0.9rem;
  background: #f8f8f8;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 21212121;
  .scrollx-content {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 20px;
    box-sizing: content-box;
  }
  .nav {
    // padding: 0 0.16rem 0 0.1rem;
    height: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    white-space: nowrap;
  }
  li {
    // margin-bottom: 0.3rem;
    // display: inline-block;
    height: 100%;
    flex: 1;
    // min-width: 20%;
    // max-width: 20%;
    margin: 0 10px;
    padding: 0 5px;
    text-align: center;
    position: relative;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    &::after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0.04rem;
      background: #ff6990;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: all 0.5s;
    }
    &.active {
      color: #ff6990;
    }
    &.active::after {
      width: 100%;
    }
  }
}
.mescroll {
  position: fixed;
  top: 0rem;
  padding-top: 0.88rem;
}
.data-list li {
  height: 100px;
}
</style>
<style>
.data-list .mescroll-totop {
  bottom: 100px;
}
.mescroll-downwarp .downwarp-slogan {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
</style>