<template>
  <div>
    <p class="categorie">Votre adresse</p>
    <p class="info">{{ address }}</p>
  </div>
</template>

<script>
export default { name: "Address", props: ["address"] };
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

div {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.categorie {
  font-size: 1.25rem;
}
.info {
  font-size: 1rem;
  margin-left: 0.5rem;
}
</style>