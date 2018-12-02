const SET_WORD = "list/SETWORD";

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_WORD:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
}

export const setWord = ({ word }) => ({
  type: SET_WORD,
  payload: word
});
