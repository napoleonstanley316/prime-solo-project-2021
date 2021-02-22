const clientListReducer = (state = [], action) => {
    switch (action.type) {
      case "LIST_MYCLIENTS":
        return action.payload;
      default:
        return state;
    }
  };
  
  // console.log(detailsReducer);
  
  export default clientListReducer;