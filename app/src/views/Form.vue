<template>
  <div>
    <p>Demande de récuperation pour {{ type }}</p>
    <Adress :adress="adress" />
    <hr />
    <Quantity />
    <hr />
    <AddImg />
    <div class="choise">
      <button class="left" @click="$router.push({ name: 'Home' })">
        Annuler
      </button>
      <button class="right" @click="send">Envoyer</button>
    </div>
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
    return { type: this.$route.params.waste, adress: "12 grdhthtd h6j 7j7" };
  },
  methods: {
    send() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

p {
  margin-top: 1rem;
  font-weight: bold;
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