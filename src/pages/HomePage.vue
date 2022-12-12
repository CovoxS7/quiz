<template>
  <TheTwoRowLayout :fullsize="true">
    <template #topRow>
      <div class="col-10 col-lg-4">
        <div class="display-5">Flugzeug</div>
        <hr />
        <div class="display-1">Quiz</div>
      </div>
    </template>
    <template #bottumRow>
      <div class="col-10 col-lg-5">
        <img
          src="@/assets/p47thunderbolt.svg"
          alt="Flugzeug"
          class="img-fluid"
        />
      </div>
      <div class="col-10 col-lg-3">
        <StartComponent />
      </div>
    </template>
  </TheTwoRowLayout>
</template>

<script>
import TheTwoRowLayout from "@/layouts/TheTwoRowLayout.vue";
import StartComponent from "@/components/StartComponent.vue";

export default {
  name: "HomePage",
  components: {
    TheTwoRowLayout,
    StartComponent,
  },
};
</script>

<style scoped></style>
