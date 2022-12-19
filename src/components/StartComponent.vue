<template>
  <div class="mb-5">
    <span>Jetzt Namen eingeben und los gehts.</span>
    <form class="mt-4" @submit="startQuiz">
      <input
        type="text"
        name="nickname"
        id="nickname"
        class="form-control text-center"
        placeholder="Nickname"
        v-model="name"
      />
      <div class="d-grid mt-2">
        <button class="btn btn-primary">Start</button>
      </div>
    </form>
  </div>
</template>

<script>
import Store from "../store";
export default {
  name: "StartComponent",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    startQuiz(e) {
      e.preventDefault();
      Store.mutations.setUserName(this.name);
      this.$router.push({ path: "/points" });
    },
  },
};
</script>

<style scoped></style>
