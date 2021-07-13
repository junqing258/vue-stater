import { reactive, readonly } from "vue";

const state = reactive({
  message: "Hello!",
});

export const sharedState = readonly(state);

export const actions = {
  setMessageAction(newValue: string) {
    state.message = newValue;
  },
  clearMessageAction() {
    state.message = "";
  },
};
