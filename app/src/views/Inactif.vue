<template>
  <div>
    <UserMenu />
    <div class="container">
      <div class="up">
        <h2>Demande Inactif</h2>
      </div>
    </div>
    <div class="choise">
      <button class="left" @click="$router.push({ name: 'Home' })">Back</button>
    </div>
  </div>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue";

export default {
  name: "Inactif",
  components: {
    UserMenu,
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

.container {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.up {
  display: flex;
  flex: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.choise {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.left {
  flex: 50%;
  height: 2.5rem;
}
.right {
  flex: 50%;
  margin-left: 0.5rem;
}
</style>