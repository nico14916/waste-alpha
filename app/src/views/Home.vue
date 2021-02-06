<template>
  <div class="home">
    <Thing />
    <Thing />
    <Thing />
    <Thing />
    <Thing />
    <Thing />
  </div>
</template>

<script>
import Thing from "@/components/Thing.vue";
export default {
  name: "Home",
  components: {
    Thing,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
