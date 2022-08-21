<template>
  <router-view />
</template>

<script setup lang="ts">
import { useInfo } from '@/store/useInfo'
import { routerStore } from '@/store/routerStore'

const user = useInfo()
const routeAbout = routerStore()

user.SET_ROLES(['guest']) // 设置角色

routeAbout.SET_CURRENT(user.GET_ROLES())
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
