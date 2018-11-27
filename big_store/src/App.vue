<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <yd-tabbar :fixed=true>
      <yd-tabbar-item title="首页" link="#">
        <yd-icon name="home" slot="icon" size="0.3rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#">
        <yd-icon name="shopcart-outline" slot="icon" size="0.3rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#">
        <yd-icon name="ucenter-outline" slot="icon" size="0.3rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="图片" link="#">
        <img slot="icon" style="height: 25px;" src="http://static.ydcss.com/ydui/img/logo.png">
      </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { TabBar, TabBarItem } from "vue-ydui/dist/lib.rem/tabbar";
import { Icons } from "vue-ydui/dist/lib.rem/icons";
Vue.component(TabBar.name, TabBar);
Vue.component(TabBarItem.name, TabBarItem);

/* 使用px：import {Icons} from 'vue-ydui/dist/lib.px/icons'; */

Vue.component(Icons.name, Icons);
export default {
  name: "app"
};
</script>

<style lang="less">
body,
html {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  // visibility: hidden;
}
#app {
  height: 100%;
}
</style>
