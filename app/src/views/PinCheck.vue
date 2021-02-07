<template>
  <div class="connect">
    <h1>Vérification</h1>
    <form @submit.prevent="submit">
      <label for="pin">Numéro de vérification</label>
      <input
        id="pin"
        type="text"
        inputmode="numeric"
        v-model="pin"
        placeholder="123456"
        pattern="[0-9]{6}"
        required
      />
      <button :disabled="loading">Valider</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Connect",
  data() {
    return {
      pin: null,
      loading: false,
    };
  },
  methods: {
    submit() {
      this.loading = true;
      this.$http
        .post(`${this.$apiUrl}/pin`, {
          pin: this.pin,
        })
        .then((res) => {
          this.$store.commit("setToken", res.data.token);
          window.localStorage.setItem("token", res.data.token);
          this.$store.commit("setStatus", res.data.status);
          window.localStorage.setItem("status", res.data.status);
          this.$store.dispatch("loadToken");
          if (res.data.status == "require-info") {
            this.$router.push({ name: "Pin" });
          } else {
            this.$router.push({ name: "Home" });
          }
          this.loading = false;
        });
    },
  },
};
</script>
