<template>
  <button
    class="waste"
    @click="
      $router.push({ name: `${type.path}`, params: { waste: type.name } })
    "
  >
    <img :src="getImg(type.image)" height="50" width="50" />
    <p>{{ type.name }}</p>
  </button>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {};
  },
  methods: {
    getImg(image) {
      return require(`@/assets/waste-icon/${image}.png`);
    },
  },
};
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
p {
  font-size: 1rem;
  line-height: 125%;
  color: black;
}
</style>