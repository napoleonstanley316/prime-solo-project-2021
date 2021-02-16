const myTrainers = (state = [], action) => {
    switch (action.type) {
      case "SET_MYTRAINERS":
        return action.payload;
      default:
        return state;
    }
  };
  
  // console.log(myTrainers);
  
  export default myTrainers;
  