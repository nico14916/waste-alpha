<template>
  <div id="app">
    <Header />
    <router-view class="router-view" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
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
