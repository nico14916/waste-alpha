<template>
  <div class="connect">
    <h1>Connection</h1>
    <form @submit.prevent="submit">
      <label for="phone">Téléphone</label>
      <input
        id="phone"
        type="text"
        inputmode="numeric"
        v-model="phone"
        placeholder="123-456-7890"
        pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
        required
      />
      <button :disabled="loading">Se connecter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Connect",
  data() {
    return {
      phone: null,
      loading: false,
    };
  },
  methods: {
    submit() {
      this.$http
        .post(`${this.$apiUrl}/connect`, {
          phone: this.phone.replace(/[^0-9.]/g, ""),
        })
        .then((res) => {
          this.$store.commit("setToken", res.data.token);
          window.localStorage.setItem("token", res.data.token);
          this.$store.commit("setStatus", res.data.status);
          window.localStorage.setItem("status", res.data.status);
          this.$store.dispatch("loadToken");
          this.$router.push({name:'PinCheck'});
        });
    },
  },
};
</script>
