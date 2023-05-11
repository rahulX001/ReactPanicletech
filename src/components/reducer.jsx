import { createStore } from "redux";
const initialState = {
  formData: {
    name: "",
    age: "",
    gender: "",
    email: "",
  },
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
}

const store = createStore(formReducer);

export default store;
