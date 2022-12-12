import { questionData } from "./seed";
import { reactive, readonly } from "vue";

const state = reactive({
  questionData,
  nickname: "",
  usedQuestions: [],
});

const getters = {
  getQuestion: () => {
    const randomNumber = Math.floor(
      Math.random() * state.questionData.length + 1
    );
    console.log(randomNumber);
    if (state.usedQuestions.includes(randomNumber)) {
      getters.getQuestion();
    } else {
      const question = state.questionData.find(
        (element) => element.id === randomNumber
      );
      mutations.setUsedQuestion(randomNumber);
      return question;
    }
  },
  getQuestionNumber: () => {
    return state.usedQuestions.length;
  },
};

const mutations = {
  setUsedQuestion: (id) => {
    state.usedQuestions.push(id);
    console.log(state.usedQuestions);
  },
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
