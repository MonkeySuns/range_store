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
        <RouterView v-slot="{ Component }">
          <Transition name="slide-fade" mode="out-in">
            <component :is="Component"/>
          </Transition>
        </RouterView>
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

.el-main>*:first-child {
  height: 100%;
}

.slide-fade-leave-active, .slide-fade-enter-active {
  transition: all .5s cubic-bezier(.49, .19, .54, .96);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

</style>