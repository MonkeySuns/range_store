<template>
  <div class="page-header">
    <div class="page-header-crumbs">
      <el-breadcrumb>
        <template v-for="(item, i) in breadcrumbArr">
          <el-breadcrumb-item
            v-if="item.title"
            :key="item.path"
            :to="{ path: item.path }"
          >
            {{ item.title }}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-else :key="i">{{
            item?.title
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
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'

interface rangePath {
  title: string
  path: string
}

const breadcrumbArr: Array<rangePath> = reactive([])

const originRouter = useRouter()

watch(
  () => originRouter.currentRoute,
  nd => {
    breadcrumbArr.length = 0 // 清空原数组
    const originArr = nd.value.matched
    if (originArr[0].path !== '/home') {
      breadcrumbArr.push({
        title: '首页',
        path: '/home'
      })
    }

    originArr.forEach(item => {
      breadcrumbArr.push({
        title: item.meta.title || '',
        path: item.path
      })
    })
  },
  { immediate: true, deep: true }
)
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
