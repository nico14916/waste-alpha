<template>
  <header>
      <h1>écoCollecte</h1>
      <router-link :to="{name:'Info'}" v-if="$store.getters.status == 'verified'">
        <img class="usericon" src="@/assets/waste-icon/icons8-user-folder-100.png"/>
      </router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

header {
  background-color: $primary;
  display: inline-flex;
  //text-align: center;
  //padding: 1rem;
  text-decoration: none;
  color: white;
  width: 100%;
  height: 4rem;
  align-items: center;
}
h1{
  padding: 0 1rem;
  display: block;
  font-weight: normal;
  font-size: 1rem;
  flex: 1 1;
}
.usericon{
  display: block;
  height: 2rem;
  padding: 0 1rem;
}
</style>