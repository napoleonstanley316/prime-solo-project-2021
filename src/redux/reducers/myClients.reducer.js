const myClients = (state = [], action) => {
    switch (action.type) {
      case "SET_MYCLIENTS":
        return action.payload;
      default:
        return state;
    }
  };
  
  // console.log(myTrainers);
  
  export default myClients;
  