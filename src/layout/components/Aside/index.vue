<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <template v-for="item of currentRouter" :key="item.path">
      <el-sub-menu v-if="item.children?.length" :index="item.path">
        <template #title>{{ item.meta?.title }}</template>
        <el-menu-item v-for="child of item.children" :key="child.path" :index="`${item.path}-${child.path}`">
          {{ child.meta?.title }}
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item v-else>
        <template #title>{{ item.meta?.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { routerStore } from '@/store/routerStore'
const currentRouter= routerStore().GET_CURRENT()
console.log('获取的路由信息: ==> ', currentRouter)


</script>

<style lang="scss" scoped>
.el-menu {
  --el-menu-bg-color: #{$primaryColor};
  --el-menu-text-color: #{$baseMenu};
  --el-menu-hover-bg-color: #263445;
  border-right: none;
}
</style>