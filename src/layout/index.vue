<template>
  <el-container>
    <el-aside width="17rem">
      <Aside />
    </el-aside>
    <el-container>
      <el-header><p>头部</p></el-header>
      <el-main>主体部分</el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from './components/Aside/index.vue'
// import { routerStore } from '@/store/routerStore'



</script>


<style lang="scss" scoped>
.el-container {
  height: 100%;

  .el-aside {
    background-color: $primaryColor;
  }
}
</style>