export function filterReducer(state, action) {
    switch (action.type) {
      case "SET_CATEGORY": {
        return {
          ...state,
          selectedCategory: action.payload,
        };
      }
  
      default: {
        console.warn(`Unhandled action type: ${action.type}`);
        return state;
      }
    }
  }
  
  // Initial filter state
  export const initialFilterState = {
    selectedCategory: "All",
  };
  