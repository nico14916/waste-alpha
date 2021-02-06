<template>
  <button
    class="waste"
    @click="$router.push({ name: 'Form', params: { type: } })"
  >
    <img src="@/assets/logo.png" height="50" width="50" />
    <p>Toxic</p>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

.waste {
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-decoration: none;
  color: white;
  display: block;
  height: 9rem;
  width: 9rem;
}
</style>