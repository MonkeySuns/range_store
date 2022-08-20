<template>
  <div class="page-header">
    <div class="page-header-crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          homepage
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">promotion management</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="page-header-base"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-header {
  height: 42px;
  padding: var(--el-header-padding);
  box-shadow: 0 2px 10px 0 orange;
}
</style>
