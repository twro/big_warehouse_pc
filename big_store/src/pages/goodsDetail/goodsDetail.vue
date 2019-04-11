<template>
  <div class="goods-detail">
    <head-nav title="商品详情"></head-nav>
    <section class="g-scrollview">
      <div class="detail-main">
        <div class="banner">
          <detail-swiper></detail-swiper>
        </div>
        <div class="buy_area">
          <div class="buy-price">
            <div class="price">
              <span class="price-range">￥1.03</span>
              <!-- <span class="sss">ssss</span> -->
            </div>
            <div class="attention">
              <span class="hot-span">热度：10</span>
            </div>
          </div>
          <div class="buy-tit">
            <h1 class="fn fn-goods-name">[完税商品] 美素奶粉 - 财务专用-测</h1>
            <span class="share"></span>
          </div>
        </div>
        <div class="detail_gap"></div>
        <div class="detail_parms">
          <div class="parms-name">产品参数</div>
          <table>
            <tbody>
              <tr>
                <td>商品编号</td>
                <td>1183</td>
              </tr>
              <tr>
                <td>产地</td>
                <td>中国</td>
              </tr>
              <tr>
                <td>品牌</td>
                <td>美素</td>
              </tr>
              <tr>
                <td>系列</td>
                <td>港版美素</td>
              </tr>
              <tr>
                <td>计量单位</td>
                <td>罐</td>
              </tr>
              <tr>
                <td>贸易类型</td>
                <td>完税商品</td>
              </tr>
              <tr>
                <td>保质期</td>
                <td>12月</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="detail_parms nopadd">
          <div class="parms-name padd20">图文详情</div>
          <div style="height:2000px;background:red;margin-bottom:10px"></div>
        </div>
      </div>
    </section>
    <div class="footer m-tabbar">
      <div class="tabbar-item tabbar-border">
        <i class="icon"></i>
        <span class="text">进货车</span>
        <span class="badge badge-danger">1</span>
      </div>
      <div class="tabbar-item tabbar-border">
        <i class="icon icon-kf"></i>
        <span class="text">进货车</span>
      </div>
      <div class="tabbar-item tabbar-rightnow tabber-same">
        <span class="text" @click="showCarBuy">立即下单</span>
      </div>
      <div class="tabbar-item tabbar-addcar tabber-same">
        <span class="text" @click="showCarBuy">加入购物车</span>
      </div>
    </div>
    <div class="select-goods" v-if="carShow">
      <div class="car-list" :class="{show:carShow}">
        <div class="carlist-inner" ref="carInner">
          <div class="car-main">
            <div class="close">
              <span class="close-pic"></span>
            </div>
            <div class="car-top">
              <div class="car-pic">
                <img
                  src="http://static.shangzhan168.cn/shangzhan168/test//shangjia/2018/12/a29efa59-6605-41d7-9f24-12486aa3c9e3.jpg"
                  alt
                >
              </div>
              <div class="car-title">
                <!---->
                <span class="car-pice">
                  <em>￥298</em>
                  <del></del>
                </span>
                <span class="car-pice" style="padding-top: 0.01rem;">
                  <i>折合单价： ￥149.00</i>
                  <span class="taxation">
                    税费:￥
                    <i>33.8</i>
                  </span>
                </span>
                <span class="car-tit">
                  <span id="producttitlespan">[保税商品] Friso/美素佳儿奶粉 全</span>
                </span>
              </div>
            </div>
            <div class="car-scroll">
              <div class="car-age sameLine">
                <div class="car-age-txt">适用年龄</div>
                <div class="car-age-list">
                  <ul>
                    <li class>0-6个月</li>
                    <li class="car-age-active">6-12个月</li>
                    <li class>12-24个月</li>
                  </ul>
                </div>
              </div>
              <div class="car-age sameLine">
                <div class="car-age-txt">选择段位</div>
                <div class="car-age-list">
                  <ul>
                    <li class="hasnotcomb">1段</li>
                    <li class="car-age-active">2段</li>
                    <li class="hasnotcomb">3段</li>
                  </ul>
                </div>
              </div>
              <div class="car-nums sameLine">
                <div class="nums-txt">规格</div>
                <div class="car-age-list">
                  <ul>
                    <li class>1罐</li>
                    <li class="car-age-active">2罐</li>
                  </ul>
                </div>
              </div>
              <div class="car-nums sameLine car-quality">
                <div class="nums-txt">数量</div>
                <span id="J_Quantity" class="m-spinner">
                  <a href="javascript:;" class="J_Del">+</a>
                  <input type="text" value="1" class="J_Input">
                  <a href="javascript:;" class="J_Add cannotAddReduce">-</a>
                </span>
              </div>
            </div>
            <div class="m-cell">
              <div class="cell-item">
                <div class="cell-left">库存</div>
                <div class="cell-right">9912</div>
              </div>
              <div class="cell-item">
                <div class="cell-left">有效期</div>
                <div class="cell-right">2019-07</div>
              </div>
            </div>
            <div class="car-btns">
              <span class="btns-sure">确定</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav/nav";
import "swiper/dist/css/swiper.css";
import DetailSwiper from "@/components/DetailSwiper/DetailSwiper";
import SelectGoods from "@/components/SelectGoods/SelectGoods";
export default {
  components: {
    headNav: Nav,
    detailSwiper: DetailSwiper,
    selectGoods: SelectGoods
  },
  data() {
    return {
      carShow: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    showCarBuy: function() {
      this.carShow = !this.carShow;
    }
  },
  created() {},
  mounted() {
    //   console.log(window)
    // document.getElementsByClassName
    window.addEventListener(
      "scroll",
      () => {
        console.log(0);
      },
      true
    );
  }
};
</script>
<style lang='less' scoped>
* {
  -webkit-overflow-scrolling: touch;
}

.g-scrollview {
  padding-top: 0.88rem;
  padding-bottom: 0.98rem;
  width: 100%;
  //   overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  .banner {
    width: 100%;
    height: 7.5rem;
  }
  .buy-price {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-items: center;
  }
  .price {
    flex: 1;
    padding-left: 0.2rem;
    font-size: 0.42rem;
    color: #fff;
    background: rgb(245, 23, 74);
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    // flex-direction: column;
    &::after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border: 0.3rem solid transparent;
      border-bottom: 1rem solid rgb(245, 23, 74);
      position: absolute;
      right: -0.32rem;
      top: -0.3rem;
    }
  }
  .attention {
    background: #ff9a08;
    color: #261eb2;
    font-family: "Microsoft YaHei";
    width: 2.76rem;
    padding-right: 0.2rem;
    font-size: 0.3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
  .buy-tit {
    width: 100%;
    padding: 0.4rem 0.2rem;
    overflow: hidden;
    position: relative;
  }
  .fn {
    position: relative;
    color: rgb(34, 34, 34);
    overflow: hidden;
    min-height: 0.8rem;
    font-size: 0.3rem;
    font-weight: 400;
    line-height: 0.38rem;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-right: 1rem;
  }
  .share {
    display: inline-block;
    width: 1.12rem;
    height: 0.5rem;
    background: url("../../assets/images/detail_share.png") no-repeat top center;
    background-size: 100%;
    position: absolute;
    right: 0;
    top: 0.4rem;
  }
  .detail_gap {
    padding-top: 0.2rem;
    background: rgb(248, 248, 248);
    margin: -1px 0;
    position: relative;
    z-index: 2;
  }
  .detail_parms {
    padding: 0 0.2rem;
  }
  .parms-name {
    font-size: 0.28rem;
    color: rgb(153, 153, 153);
    margin: 0.44rem 0 0.3rem 0;
  }
  table {
    border: 1px solid rgb(242, 242, 242);
    width: 100%;
    font-size: 12px;
    border-collapse: collapse;
    margin-bottom: 0.4rem;
  }
  td {
    border: 1px solid rgb(242, 242, 242);
    height: 0.78rem;
    line-height: 0.78rem;
    &:first-child {
      width: 2.1rem;
      text-align: center;
    }
    &:not(:first-child) {
      text-indent: 0.2rem;
    }
  }
  .nopadd {
    padding: 0;
  }
  .parms-name.padd20 {
    padding: 0 0.2rem;
  }
}
.m-tabbar {
  width: 100%;
  position: relative;
  height: 0.98rem;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #ccc;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .badge {
    color: #fff;
    font-size: 12px;
    position: relative;
    display: inline-block;
    border-radius: 1000px;
    line-height: 1;
    padding: 3px 6px;
    white-space: nowrap;
    background-color: #d0d0d0;
    &:after {
      content: "";
      width: 200%;
      height: 200%;
      border: 2px solid rgb(245, 23, 74);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 1rem;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }
  .tabbar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #979797;
    .icon {
      display: block;
      background: url("../../assets/images/bg.png") no-repeat top center;
      background-size: 7.5rem;
      margin: 0.2rem auto 0.05rem;
    }
    &.tabbar-border {
      width: 1.1rem;
      position: relative;
      .icon {
        width: 0.35rem;
        height: 0.32rem;
        background-position: -0.18rem -10.22rem;
      }
      .icon-kf {
        width: 0.32rem;
        height: 0.32rem;
        background-position: -0.175rem -9.38rem;
      }
      .txt {
        font-family: "Microsoft YaHei";
        font-size: 0.2rem;
        color: rgb(107, 105, 107);
      }
      &:not(:last-child)::after {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        background: rgb(241, 241, 241);
        position: absolute;
        right: -2px;
        top: 0;
      }
    }
    .badge {
      position: absolute;
      top: 0.07rem;
      left: 70%;
      z-index: 999;
      margin-left: -0.15rem;
    }
    .badge-danger {
      background: #fff;
      color: rgb(245, 23, 74);
    }
  }
  .tabber-same {
    width: 2.65rem;
    font-size: 0.3rem;
    color: #fff;
    height: 100%;
    &.tabbar-rightnow {
      background: rgb(255, 154, 8);
      z-index: 21;
    }
    &.tabbar-addcar {
      background: rgb(245, 23, 74);
      z-index: 21;
    }
  }
}
.car-list {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 100%;
  background: rgba(0, 0, 0, 0.34);
  z-index: 999;

  .carlist-inner {
    width: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1000;
    transform: translate3d(0, 620px, 0);
    transition: transform 0.2s cubic-bezier(0.42, 0, 0.58, 1);
  }
  &.show {
    top: 0;
    .carlist-inner {
      transform: translate3d(0, 0, 0);
    }
  }
  .car-main {
    padding: 0 0.2rem;
    z-index: 2131;
    position: relative;
  }
  .close {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 11111;
    text-align: center;
  }
  .close-pic {
    display: block;
    width: 100%;
    height: 100%;
    background: url("../../assets/images/off.png") no-repeat left center;
    background-size: 100% 100%;
  }
  .car-top {
    width: 100%;
    display: flex;
    padding-bottom: 0.2rem;
    position: relative;
  }
  .car-pic {
    width: 2rem;
    height: 1.58rem;
    transform: translateY(-0.42rem);
    margin-right: 0.3rem;
    img {
      width: 100%;
      height: 2rem;
      display: block;
      margin: auto;
      border-radius: 5px;
    }
  }
  .car-title {
    flex: 1;
    min-height: 2.15rem;
    max-height: 2.15rem;
  }
  .car-pice {
    display: block;
    width: 100%;
    padding-top: 0.3rem;
    padding-bottom: 0.2rem;
    font-size: 0.26rem;
    color: rgb(34, 34, 34);
  }
  em {
    margin-left: 3px;
    color: rgb(245, 23, 74);
    font-weight: bold;
  }
  .taxation {
    margin-left: 0.1rem;
    display: inline-block;
    padding: 0.02rem 0.2rem;
    background: rgb(245, 23, 74);
    text-align: center;
    color: #fff;
    transform: scale(0.9);
    border-radius: 0.3rem;
  }
  .car-tit {
    display: inline-block;
    font-size: 0.27rem;
    color: rgb(34, 34, 34);
    position: relative;
    line-height: 0.38rem;
    min-height: 0.76rem;
    max-height: 0.76rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .car-scroll {
    width: 100%;
    height: 4.5rem;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .car-btns {
    padding: 0.1rem 0;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
  }
  .btns-sure {
    display: inline-block;
    width: 100%;
    font-size: 0.3rem;
    color: rgb(36, 37, 36);
    padding: 0.25rem 0;
    border-radius: 5px;
    text-align: center;
    border: 0px;
    font-family: arial, sans-serif;
    background: rgb(245, 23, 74);
    color: #fff;
  }
  .m-cell {
    background-color: #fff;
    position: relative;
    z-index: 1;
  }
  .cell-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    overflow: hidden;
  }
  .cell-left {
    line-height: 0.5rem;
    font-size: 0.26rem;
    font-weight: bold;
    color: rgb(153, 153, 153);
    display: flex;
    align-items: center;
  }
  .cell-right {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    min-height: 1rem;
    color: #525252;
    text-align: right;
    font-size: 0.26rem;
    padding-right: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .sameLine {
    position: relative;
  }
  .car-age-txt {
    padding: 0.3rem 0;
    font-size: 0.26rem;
    color: rgb(153, 153, 153);
    font-weight: bold;
  }
  .car-age-list {
    padding-bottom: 0.3rem;
    li {
      min-width: 1.2rem;
      padding: 0 0.1rem;
      height: 0.56rem;
      line-height: 0.56rem;
      text-align: center;
      border: 1px solid rgb(228, 228, 228);
      color: rgb(34, 34, 34);
      border-radius: 5px;
      display: inline-block;
      margin-right: 0.28rem;
      margin-bottom: 0.1rem;
    }
    .car-age-active {
      border: 1px solid rgb(245, 23, 74);
      color: rgb(245, 23, 74);
    }
  }
  .car-quality {
    display: flex;
  }
  .nums-txt {
    line-height: 0.5rem;
    font-size: 0.26rem;
    font-weight: bold;
    color: rgb(153, 153, 153);
    display: inline-block;
    vertical-align: text-bottom;
  }
  .m-spinner {
    flex: 1;
    vertical-align: sub;
    border: none;
    display: flex;
    justify-content: flex-end;
    a {
      float: left;
      width: 0.5rem;
      height: 0.5rem;
      line-height: 0.52rem;
      text-align: center;
      font-weight: bold;
      color: #666;
      letter-spacing: 0;
      background-color: #fff;
      font-size: 0.26rem;
    }
    input {
      letter-spacing: 0;
      float: left;
      width: 0.85rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      color: #666;
      border: none;
      font-size: 0.26rem;
      background: #f8f8f8;
    }
  }
}
</style>