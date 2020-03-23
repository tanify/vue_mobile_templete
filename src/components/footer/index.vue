<template>
  <transition name="footer">
  <div class="footer" v-show="showFooter">
    <ul class="footer-content">
        <li v-for="(item, index) in list"
        :key="index"
        @click="handleNav(item.nav)"
        :class='item.cur?"cur":""'>
            <div>
              <span :class="item.className"></span>
              <span>{{item.name}}</span>
            </div>
        </li>
    </ul>
  </div>
  </transition>
</template>
<script src="./footer.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/css/varable.scss';
@import './index.scss';
</style>
