<template>
  <div>
    <input type="text" v-model="value" />
    <button>Voir</button>
  </div>
</template>

<script>
export default {
  name: "Adress",
  data() {
    return { value: "" };
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

div {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
input[type="text"] {
  flex: 70%;
  height: 2.5rem;
}
button {
  flex: 30%;
  margin-left: 0.5rem;
}
</style>