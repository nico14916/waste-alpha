<template>
  <div class="register">
    <h1>Profile</h1>
    <p v-if="error" class="error">
      Une erreur c'est produite. N'oublier pas de remplir tous les champs.
    </p>
    <form @submit.prevent="">
      <label for="firstname">Prénom</label>
      <input id="firstname" type="text" v-model="firstname" />
      <label for="lastname">Nom</label>
      <input id="lastname" type="text" v-model="lastname" />
      <Gmap @location="setLocation" />
      <button @click="send">Suivant</button>
    </form>
  </div>
</template>

<script>
import Gmap from "@/components/Gmap.vue";

export default {
  name: "Register",
  components: {
    Gmap,
  },

  data() {
    return {
      firstname: null,
      lastname: null,
      error: false,
      location: null,
    };
  },
  methods: {
    setLocation(location) {
      this.location = location;
    },
    send() {
      this.error = false;
      if (this.firstname && this.lastname && this.location) {
        this.$http
          .post(`${this.$apiUrl}/profile`, {
            firstname: this.firstname,
            lastname: this.lastname,
            postalCode: this.location.postalCode,
            address: this.location.address,
          })
          .then((res) => {
            this.$store.commit("setToken", res.data.token);
            window.localStorage.setItem("token", res.data.token);
            this.$store.commit("setStatus", res.data.status);
            window.localStorage.setItem("status", res.data.status);
            this.$store.dispatch("loadToken");
            this.$router.push({ name: "Home" });
            this.loading = false;
          });
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

.error {
  font-size: 0.85rem;
  color: red;
}
</style>
