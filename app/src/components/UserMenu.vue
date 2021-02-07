<template>
  <div class="choise">
    <button class="left" @click="$router.push({ name: 'Info' })">
      Information
    </button>
    <button class="mid" @click="$router.push({ name: 'Actif' })">Actif</button>
    <button class="right" @click="$router.push({ name: 'Inactif' })">
      Inactif
    </button>
  </div>
</template>

<script>
export default {
  name: "UserMenu",
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

.choise {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.left {
  flex: 33%;
}
.mid {
  flex: 33%;
  margin-left: 1rem;
  margin-right: 1rem;
}
.right {
  flex: 33%;
}
.back {
  width: 10rem;
}
</style>