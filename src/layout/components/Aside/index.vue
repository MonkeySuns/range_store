<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <el-sub-menu index="1">
      <template #title>第一个标签</template>
      <el-menu-item index="1-1-1">item one</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <template #title>第二个标签</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { common } from '@/router'

console.log(common);


</script>

<style lang="scss" scoped>
.el-menu {
  --el-menu-bg-color: #{$primaryColor};
  --el-menu-text-color: #{$baseMenu};
  --el-menu-hover-bg-color: #263445;
  border-right: none;
}
</style>