<template>
  <div>
    <p>Demande de récuperation pour {{ type }}</p>
    <Address :address="address" />
    <hr />
    <Quantity v-on:quantity="setQuantity" />
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
import Address from "../components/Address.vue";
import Quantity from "../components/Quantity.vue";
import AddImg from "@/components/AddImg.vue";

export default {
  name: "Form",
  components: { Address, Quantity, AddImg },
  data() {
    return { type: this.$route.params.waste, address: "", quantity: 0 };
  },
  methods: {
    send() {
      this.$router.push({ name: "Home" });
    },
    setQuantity(quantityToAdd) {
      this.quantity = quantityToAdd;
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