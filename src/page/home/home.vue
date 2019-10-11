<!--
 * @Description: 瀑布流
 * @Author: wxh
 * @Date: 2019-07-25 16:56:37
 * @LastEditTime: 2019-09-02 14:17:09
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="ui-page">
    <div class="mui_flex">
      <div class="avatar"></div>
      <div class="mui_l-auto">333</div>
      <div class="right">2342343242332</div>
    </div>
    <!-- 中间居中 -->
    <div class="mui_flex">
      <div class="avatar"></div>
      <div class="mui_l-auto mui_r-auto" style="background: red;">333</div>
      <div class="right">2342343242332</div>
    </div>
    <div class="mui_flex"></div>
  </div>
</template>

<script>
import {Http} from 'util/index'

export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    Http.post({
      type: 'post',
      url: '/scRFGrf9bffc6e89af99edab0a1dc779de3bd79a47e8fa6/boards',
      data: {
        page: 1,
        size: 20,
      },
      suecces: function() {
        console.log('成功');
      },
      error: function() {
        console.log('失败');
      },
    });
    // Http.get({
    //   type: 'get',
    //   url: '/scRFGrf9bffc6e89af99edab0a1dc779de3bd79a47e8fa6/isLogin',
    //   data: {
    //     page: 1,
    //     size: 20,
    //   },
    //   suecces: function(response) {
    //     console.log('成功');
    //   },
    //   error: function(error) {
    //     console.log('失败');
    //   },
    // });
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "common/scss/index.scss";
.avatar {
  width: 50px;
  height: 50px;
  background-color: blanchedalmond;
}
.right {
  background-color: aqua;
}
.text {
  font-size: 50px;
}
</style>

