<template>
  <TheTwoRowLayout :fullsize="true">
    <template #topRow>
      <h1>Hallo {{ name }}</h1>
    </template>
    <template #bottumRow>
      <div class="col-8 col-lg-2 d-grid">
        <button class="btn btn-primary" @click="nextQuestion()">Weiter</button>
      </div>
    </template>
  </TheTwoRowLayout>
</template>

<script>
import TheTwoRowLayout from "@/layouts/TheTwoRowLayout.vue";
import Store from "../store";

export default {
  name: "PointsPage",
  components: {
    TheTwoRowLayout,
  },
  data() {
    return {
      name: Store.state.nickname,
    };
  },
  methods: {
    nextQuestion() {
      Store.mutations.setSelectedAnswer("");
      this.$router.push({ path: "/question" });
    },
  },
};
</script>

<style scoped></style>
