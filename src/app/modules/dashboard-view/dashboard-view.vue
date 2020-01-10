<template>
  <div class="dashboard-view">
    <div class="main-sidebar">
      <dashboard-side-menu/>
    </div>
    <div class="main-content">
      <dashboard-header/>
      <router-view></router-view>
      <dashboard-footer/>
    </div>
  </div>
</template>

<script src="./dashboard-view.js"></script>

<style lang="scss" scoped>
  @import './dashboard-view.scss';
</style>

