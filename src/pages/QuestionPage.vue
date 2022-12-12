<template>
  <TheTwoRowLayout
    :fullsize="true"
    :bottumRowClass="'g-2 g-lg-3 align-content-center justify-content-center'"
  >
    <template #topRow>
      <div class="col-10 col-lg-4">
        <div class="mt-5 display-5">Frage {{ questionNumber }}/10</div>
        <hr />
        <div class="mt-5">
          <strong>{{ question.question }}</strong>
        </div>
      </div>
    </template>
    <template #bottumRow>
      <div
        class="col-10 col-lg-5 d-grid"
        v-for="awnser in question.possibleAnswers"
        :key="awnser"
      >
        <input type="radio" class="btn-check" name="options" :id="awnser.id" />
        <label class="btn btn-secondary" :for="awnser.id">{{ awnser }}</label>
      </div>
    </template>
  </TheTwoRowLayout>
</template>

<script>
import TheTwoRowLayout from "@/layouts/TheTwoRowLayout.vue";
import Store from "../store";

export default {
  name: "QuestionPage",
  components: {
    TheTwoRowLayout,
  },
  computed: {
    questionNumber() {
      return Store.getters.getQuestionNumber();
    },
    question() {
      return Store.getters.getQuestion();
    },
  },
};
</script>

<style scoped></style>
