<template>
  <div class="home">
    <div v-for="wasteType in wasteTypes" :key="wasteType.id">
      <Thing :type="wasteType" />
    </div>
  </div>
</template>

<script>
import Thing from "@/components/Thing.vue";
export default {
  name: "Home",
  components: {
    Thing,
  },
  data() {
    return {
      wasteTypes: [
        {
          id: 1,
          image: "icons8-arduino-100",
          name: "electroniques",
          path: "Form",
        },
        {
          id: 2,
          image: "icons8-batteries-100",
          name: "batterie",
          path: "Form",
        },
        {
          id: 3,
          image: "icons8-construction-100",
          name: "dechet construction",
          path: "Form",
        },
        {
          id: 4,
          image: "icons8-light-on-100",
          name: "ampoule et neon",
          path: "Form",
        },
        {
          id: 5,
          image: "icons8-toxic-material-100",
          name: "peinture et matiere dangeureuse",
          path: "Form",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
