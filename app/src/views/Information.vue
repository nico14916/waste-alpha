<template>
  <div>
    <UserMenu />
    <div class="container">
      <div class="up">
        <h2>Information</h2>
        <button @click="editMode">Edit</button>
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
      <p class="info">{{ adress }}</p>
    </div>
    <div class="choise">
      <button class="left" @click="$router.push({ name: 'Home' })">Back</button>
      <button class="right" @click="send">save</button>
    </div>
  </div>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue";

export default {
  name: "Information",
  components: {
    UserMenu,
  },
  data() {
    return {
      modifie: false,
      firstName: "Lyssandre",
      lastName: "Chrzaszcz",
      cellNumber: "(438) 343-4545",
      adress: "12 Rue fsefef h5h 5h6",
    };
  },
  methods: {
    editMode() {
      this.modifie = !this.modifie;
    },
    send() {
      if (this.modifie) {
        // const cell = this.cellNumber.replace(/\D/g, "");
        console.log("good mode");
        this.modifie = !this.modifie;
      } else {
        console.log("bad mode");
      }
    },
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