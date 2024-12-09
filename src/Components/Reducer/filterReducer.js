export function filterReducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.payload;

    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
}

  