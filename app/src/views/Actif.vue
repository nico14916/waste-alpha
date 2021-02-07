<template>
  <div>
    <UserMenu />
    <h2>Demande Active</h2>
    <div v-for="job in jobs" :key="job.id"><Job :job="job" /></div>
    <div class="choise">
      <button class="left" @click="$router.push({ name: 'Home' })">Back</button>
    </div>
  </div>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue";
import Job from "@/components/Job.vue";

export default {
  name: "Actif",
  components: {
    UserMenu,
    Job,
  },
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    this.$http
      .get(`${this.$apiUrl}/wastes`)
      .then((res) => (this.jobs = res.data));
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

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