<template>
  <div class="register">
    <h1>Profile</h1>
      <form @submit.prevent="">
      <label for="firstname">Prénom</label>
      <input id="firstname" type="text" v-model="firstname" />
      <label for="lastname">Nom</label>
      <input id="lastname" type="text" v-model="lastname" />
      <button>Suivant</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      firstname: null,
      lastname: null,
      error: false,
    };
  },
};
</script>
