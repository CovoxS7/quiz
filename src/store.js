import { questionData } from "./seed";
import { reactive, readonly } from "vue";

const state = reactive({
  questionData,
  nickname: "",
  usedQuestions: [],
  selectedAnswer: "",
  isAnswerTrue: true,
});

const getters = {
  getQuestion: () => {
    const questionNumber = Math.floor(
      Math.random() * state.questionData.length + 1
    );
    if (state.usedQuestions.includes(questionNumber)) {
      getters.getQuestion();
    } else {
      const question = state.questionData.find(
        (element) => element.id === questionNumber
      );
      mutations.setUsedQuestion(questionNumber);
      return question;
    }
  },
  getQuestionNumber: () => {
    return state.usedQuestions.length;
  },
};

const mutations = {
  setUserName: (name) => {
    state.nickname = name;
  },
  setUsedQuestion: (id) => {
    state.usedQuestions.push(id);
  },
  setSelectedAnswer: (index) => {
    state.selectedAnswer = index;
  },
  setIsAnswerTrue: (boolean) => {
    state.isAnswerTrue = boolean;
  },
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
