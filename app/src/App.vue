<template>
  <div id="app">
    <Navigation />
    <router-view class="router-view" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  beforeCreate() {
    //this.$store.dispatch("init");
  },
};
</script>

<style lang="scss">
/*.content {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}*/
.router-view {
  margin: 0 1rem;
}
</style>
