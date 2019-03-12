import { GET_ITEMS } from "../actions/types";

const initialState = {
  items: {
    id: 1,
    name: "lialia"
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
