export function reducer(state, action) {
  switch (action.type) {
    case "FILL": {
      if (state !== null && state.length > 0) {
        console.error(
          action.type,
          " is unsupported. Data already loaded from backend."
        );
        return state;
      }
      return action.payload;
    }

    case "DELETE": {
      if (isInvalidState(state, action)) {
        return state;
      }
      const {id} = action.payload;
      // console.log("item to be deleted id :" ,id);
      const updatedState = [...state];
      const index = updatedState.findIndex((item) => item[id] === id);
      updatedState.splice(index, 1); //use filter instead
      return updatedState;
    }

    case "EDIT": {
      if (isInvalidState(state, action)) {
        return state;
      }
      const {id,entry} = action.payload;
      const updatedState = [...state];
      console.log("updatedState",updatedState);
      const index = updatedState.findIndex((item) => item.id === id);
      const editItem = {
        ...entry,
        id : id
      }
      updatedState[index] = editItem;
      return updatedState;
    }

    case "ADD": {
      if (isInvalidState(state, action)) {
        return state;
      }
      const updatedState = [...state];
      const newItem = {
        ...action.payload,
         id : getNewId(state),
      }
      updatedState.push(newItem);
      return updatedState;
    }
    default: {
      return state;
    }
  }
}

const isInvalidState = (state, action) => {
  if (state === null) {
    console.warn(
      action.type,
      " is unsupported . Data not loaded from backend yet !"
    );
    return true;
  }
  return false;
};

const getNewId = (state) => {
  console.log("state" , state);
  if(state.length === 0 ){
    return 0;
  }
  const reducer = (acc,element) => {
    if(element.id > acc){
      return element.id;
    }
    return acc;
    // return element.id > acc ? element.id : acc;
  }
  const result = state.reduce(reducer,0) +1;
  return result;
}
