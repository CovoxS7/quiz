<template>
  <TheTwoRowLayout
    :fullsize="true"
    :topRowClass="'h-50 align-items-center justify-content-center'"
    :bottumRowClass="'h-50 g-2 g-lg-3 align-content-center justify-content-center'"
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
        class="col-10 col-lg-5"
        v-for="(answer, index) in question.possibleAnswers"
        :key="index"
      >
        <AnswerComponent
          :answer="answer"
          :index="index"
          :correctAnswer="question.correctAnswer"
        ></AnswerComponent>
      </div>
    </template>
  </TheTwoRowLayout>
</template>

<script>
import TheTwoRowLayout from "@/layouts/TheTwoRowLayout.vue";
import AnswerComponent from "@/components/AnswerComponent.vue";
import Store from "../store";

export default {
  name: "QuestionPage",
  components: {
    TheTwoRowLayout,
    AnswerComponent,
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
