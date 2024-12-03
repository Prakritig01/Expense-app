export function reducer(state, action) {
  switch (action.type) {
    case "FILL": {
      return action.payload;
    }
    
    case 'DELETE' : {
      const updatedState = [...state];
      updatedState.splice(action.payload.index,1);
      return updatedState;
    }

    case 'EDIT' : {
      const updatedState = [...state];
      updatedState[action.payload.index] = action.payload.entry;
      return updatedState;
    }

    case 'ADD' : {
      const updatedState = [...state];
      updatedState.push(action.payload);
      return updatedState;
    }
    default: {
      return state;
    }
  }
}
