<template>   
    <h1> {{ store.count }}</h1>
    <button @click="store.increment(1)">Increment</button>
</template>
  
  <script lang="ts" setup >
    import { useExample } from '@/store/useExample';
    const store = useExample();
    store.init();
  </script>
  
  <style lang="scss">
  </style>
  