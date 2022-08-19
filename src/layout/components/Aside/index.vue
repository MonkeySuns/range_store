<template>
  <el-menu
    :default-active="rangeRouter"
    class="el-menu-vertical-demo"
    :router="true"
    @select="checkRouter"
  >
    <template v-for="item of currentRouter" :key="item.path">
      <el-sub-menu v-if="item.children?.length" :index="item.path">
        <template #title>{{ item.meta?.title }}</template>
        <el-menu-item v-for="child of item.children" :key="child.path" :index="`${item.path}/${child.path}`">
          {{ child.meta?.title }}
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item v-else :index="item.path">
        <template #title>{{ item.meta?.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { routerStore } from '@/store/routerStore'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const currentRouter= routerStore().GET_CURRENT()
const router = useRouter()
const rangeRouter = ref('')

watch(() => router.currentRoute.value.path, nd => {
  console.log(nd)
  rangeRouter.value = nd
}, { immediate: true })

const checkRouter = (currentRoute: string) => {
  console.log(currentRoute)
  // rangeRouter.value = currentRoute
}


</script>

<style lang="scss" scoped>
.el-menu {
  --el-menu-bg-color: #{$primaryColor};
  --el-menu-text-color: #{$baseMenu};
  --el-menu-hover-bg-color: #263445;
  border-right: none;
}
</style>