<template>
  <el-container>
    <el-aside width="17rem">
      <Aside />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from './components/Aside/index.vue'
import Header from './components/header/index.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;

  .el-aside {
    background-color: $primaryColor;
  }
}

.el-header {
  padding: 0;
}
</style>