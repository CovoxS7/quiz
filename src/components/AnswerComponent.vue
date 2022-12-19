<template>
  <div class="d-grid">
    <button
      class="btn btn-primary"
      :class="btnColor"
      @click="setSelectedAnswer(index)"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script>
import Store from "../store";

export default {
  name: "AnswerComponent",
  props: {
    answer: String,
    index: String,
    correctAnswer: String,
  },
  data() {
    return {
      btnColor: "",
    };
  },
  computed: {
    selectedAnswer() {
      return Store.state.selectedAnswer;
    },
    answerIsFalse() {
      return Store.state.isAnswerTrue;
    },
  },
  methods: {
    setSelectedAnswer(index) {
      if (Store.state.selectedAnswer === "") {
        Store.mutations.setSelectedAnswer(index);
      }
    },
  },
  watch: {
    selectedAnswer: function () {
      if (this.selectedAnswer === this.index) {
        this.btnColor = "btn-warning";
        setTimeout(() => {
          if (this.selectedAnswer === this.correctAnswer) {
            this.btnColor = "btn-success";
          } else {
            this.btnColor = "btn-danger";
            Store.mutations.setIsAnswerTrue(false);
          }
        }, 1000);
        setTimeout(() => {
          this.$router.push({ path: "/points" });
        }, 3000);
      }
    },
    answerIsFalse: function () {
      if (this.correctAnswer === this.index) {
        this.btnColor = "btn-success";
      }
    },
  },
};
</script>

<style scoped></style>
