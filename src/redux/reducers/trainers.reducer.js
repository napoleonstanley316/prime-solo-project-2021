const trainersReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TRAINERS':
        return action.payload;
      default:
        return state;
    }
  };

  console.log(trainersReducer);
  
  
  // user will be on the redux state at:
  // state.user
  export default trainersReducer;