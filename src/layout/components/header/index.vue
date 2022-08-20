<template>
  <div class="page-header">
    <div class="page-header-crumbs">
      <el-breadcrumb>
        <template v-for="(item, i) in breadcrumbArr">
          <el-breadcrumb-item
            v-if="item.path"
            :key="item.path"
            :to="{ path: item.path }"
          >
            {{ item.meta?.title }}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-else :key="i">{{
            item.meta?.title
          }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>

    <div class="page-header-base">
      <div class="page-header-base-user">
        <img src="@/assets/imgs/user.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { routerStore } from '@/store/routerStore'

const breadcrumbArr: Array<RouteRecordRaw> = reactive([])

console.log(routerStore().GET_CURRENT())
</script>

<style lang="scss" scoped>
$baseHeight: 40px;
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px $basePadding;
  box-shadow: 0 2px 10px 0 $baseShadow;
  height: $baseHeight;
}

.page-header-base {
  height: $baseHeight;
  &-user {
    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
  }
}
</style>
