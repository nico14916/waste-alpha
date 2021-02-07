<template>
  <div>
    <p>Demande de récuperation pour {{ type }}</p>
    <p v-if="error" class="error">
      Une erreur c'est produite. N'oublier pas de remplir tous les champs.
    </p>
    <Address :address="address" />
    <hr />
    <Quantity @quantity="setQuantity" />
    <hr />
    <AddImg @image="setImage" />
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
    return {
      type: this.$route.params.waste,
      address: "",
      quantity: 0,
      image: null,
      error: false,
    };
  },
  methods: {
    send() {
      if (this.quantity > 0) {
        let formData = new FormData();
        formData.append("type", this.$route.params.waste);
        formData.append("quantity", this.quantity);
        this.$http
          .post(`${this.$apiUrl}/wastes`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(this.$router.push({ name: "Home" }));
      } else {
        this.error = true;
      }
    },
    setQuantity(quantityToAdd) {
      this.quantity = quantityToAdd;
    },
    setImage(imageToAdd) {
      this.image = imageToAdd;
    },
  },
  created() {
    this.$http
      .get(`${this.$apiUrl}/profile`)
      .then((res) => (this.address = res.data.address));
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

p {
  margin-top: 1rem;
  font-weight: bold;
}
.error {
  font-size: 0.85rem;
  color: red;
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