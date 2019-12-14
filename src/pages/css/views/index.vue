<!--
 * @Description: 瀑布流
 * @Author: wxh
 * @Date: 2019-07-25 16:56:37
 * @LastEditTime: 2019-09-02 14:17:09
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="ui-page">
    index1
    <!-- <div class="mui_flex">
      <div class="avatar"></div>
      <div class="mui_l-auto">333</div>
      <div class="right">2342343242332</div>
    </div> -->
    <!-- 中间居中 -->
    <!-- <div class="mui_flex">
      <div class="avatar"></div>
      <div class="mui_l-auto mui_r-auto" style="background: red;">333</div>
      <div class="right">2342343242332</div>
    </div>
    <div class="mui_flex"></div>
    <div id="container" @touchmove="getUserAction">
      {{count}}
    </div> -->
    <div class="verticle-mode">
      <h4>咏柳</h4>
      <p>碧玉妆成一树高，<br>万条垂下绿丝绦。<br>不知细叶谁裁出，<br>二月春风似剪刀。</p> 
    </div>
  </div>
</template>

<script>
import {Http, Util} from 'util/index'

export default {
  data() {
    return {
      list: [],
      count: 0,
      getUserAction: () => {
      },
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
  },
  mounted() {
    this.getUserAction = Util.debounce(() => {
      this.count += 1;
      console.log(this);
      console.log(this.count);
    }, 300);
  },
  components: {
  },
  methods: {
  },
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
#container{
  width: 100%;
  height: 200px; 
  line-height: 200px; 
  text-align: center; 
  color: #fff; 
  background-color: #444; 
  font-size: 30px;
}
.verticle-mode {
    writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;      
    writing-mode: vertical-rl;
}
</style>

