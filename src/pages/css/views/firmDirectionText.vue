<!--
 * @Description: 文字坚向显示
 * @Author: wxh
 * @Date: 2019-07-25 16:56:37
 * @LastEditTime: 2019-09-02 14:17:09
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="ui-page">
    <p v-for="(item, index) in list" :key="index">{{item.text}}</p>
  </div>
</template>

<script>
import {Http, Util} from 'util/index'

export default {
  name: 'firmDirectionText',
  data() {
    return {
      list: [
        {
          routerLink: '',
          text: '让文字像古诗一样竖着呈现',
        }
      ]
    }
  },
  created() {
  },
  mounted() {
  },
  components: {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import "common/scss/index.scss";
</style>

