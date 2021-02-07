<template>
  <div>
    <h3>{{ title }}</h3>
    <p class="categorie">Adresse</p>
    <p class="info">{{ adress }}</p>
    <p class="categorie">Date de demande</p>
    <p class="info">{{ dateAsk }}</p>
    <p class="categorie">Date de prise</p>
    <p class="info">{{ dateTake }}</p>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["job"],
  data() {
    return {
      title: this.job.name,
      adress: this.job.adress,
      dateAsk: this.job.dateAsk,
      dateTake: this.job.dateTake,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

.categorie {
  flex: 100%;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  background-color: #bfc1c2;
  padding-left: 0.5rem;
  border-radius: 1rem;
}

.info {
  flex: 100%;
  padding-left: 0.5rem;
  margin-bottom: 0.75rem;
  border-radius: 1rem;
}
</style>