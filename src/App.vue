<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <WatchersComponent/>
  <router-view/>
</template>

<script lang="ts" setup >
  import StorageComponent from '@/components/StorageComponent.vue';
  import WatchersComponent from './components/WatchersComponent.vue';
</script>

<style lang="scss">
</style>
