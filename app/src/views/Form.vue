<template>
  <div>
    <p>Demande de récuperation pour {{ type }}</p>
    <Adress />
    <hr />
    <Quantity />
    <hr />
    <AddImg />
  </div>
</template>

<script>
import Adress from "../components/Adress.vue";
import Quantity from "../components/Quantity.vue";
import AddImg from "@/components/AddImg.vue";

export default {
  name: "Form",
  components: { Adress, Quantity, AddImg },
  data() {
    return { type: this.$route.params.waste };
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

p {
  margin-top: 1rem;
  font-weight: bold;
}
</style>