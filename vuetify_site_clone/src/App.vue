<template>
  
  <Navigation></Navigation>

  <MyDrawer></MyDrawer>
  <router-view></router-view>
</template>

<script setup lang="ts">
import MyDrawer from "@/views/Drawer/Drawer.vue";
import Navigation from "@/views/navbar/navigation.vue";
</script>
