<template>
  <div class="home">
    首页
    <p>{{day}}</p>
    <button @click="handleToast">toast</button>
    <button @click="handleDialog">dialog</button>
    <button @click="handleLoading">loading</button>
    <img :src='require("@/assets/images/11.jpg")'/>
  </div>
</template>
<style lang="scss" scope>
@import './Home.scss';
</style>
<script src="./Home.js"></script>
