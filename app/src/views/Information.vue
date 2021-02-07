<template>
  <div>
    <UserMenu />
    <div class="container">
      <div class="up">
        <h2>Information</h2>
        <button @click="editMode">Modifier</button>
      </div>

      <p class="categorie">Prénom</p>
      <p v-if="!modifie" class="info">{{ firstName }}</p>
      <input v-if="modifie" type="text" class="info" v-model="firstName" />

      <p class="categorie">Nom de Famille</p>
      <p v-if="!modifie" class="info">{{ lastName }}</p>
      <input v-if="modifie" type="text" class="info" v-model="lastName" />

      <p class="categorie">Numero de téléphone</p>
      <p class="info">{{ cellNumber }}</p>

      <p class="categorie">Adresses</p>
      <p v-if="!modifie" class="info">{{ address }}</p>
      <div v-if="modifie"><Gmap @location="setLocation" /></div>
    </div>
    <div class="choise">
      <button class="left" @click="$router.push({ name: 'Home' })">
        Retour
      </button>
      <button class="right" @click="send">Enregister</button>
    </div>
  </div>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue";
import Gmap from "@/components/Gmap.vue";

export default {
  name: "Information",
  components: {
    UserMenu,
    Gmap,
  },
  data() {
    return {
      modifie: false,
      error: false,
      firstName: null,
      lastName: null,
      cellNumber: null,
      address: null,
      location: null,
    };
  },
  methods: {
    editMode() {
      this.modifie = !this.modifie;
    },
    setLocation(location) {
      this.location = location;
    },
    send() {
      if (this.modifie) {
        this.error = false;
        if (this.firstname && this.lastname && this.address) {
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
            });
        } else {
          this.error = true;
        }
        this.modifie = !this.modifie;
      }
    },
  },
  created() {
    this.$http.get(`${this.$apiUrl}/profile`).then((res) => {
      this.firstName = res.data.firstname;
      this.lastName = res.data.lastname;
      this.cellNumber =
        "(" +
        res.data.phone.match(/^(\d{3})(\d{3})(\d{4})$/)[1] +
        ") " +
        res.data.phone.match(/^(\d{3})(\d{3})(\d{4})$/)[2] +
        "-" +
        res.data.phone.match(/^(\d{3})(\d{3})(\d{4})$/)[3];
      this.address = res.data.address;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";
.container {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.up {
  display: flex;
  flex: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
h2 {
  margin-bottom: 1rem;
}
.categorie {
  flex: 100%;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  background-color: #bfc1c2;
  padding-left: 0.5rem;
  border-radius: 1rem;
}

.info {
  flex: 100%;
  line-height: 1.5rem;
  padding-left: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: none;
}
input {
  background-color: #e5e4e2;
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