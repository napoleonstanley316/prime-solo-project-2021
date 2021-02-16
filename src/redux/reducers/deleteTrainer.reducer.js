const deleteMyTrainerReducer = (state = [], action) => {
  switch (action.type) {
    case "DELETE_POOL":
      return action.payload;
    default:
      return state;
  }
};

// console.log(deleteMyTrainerReducer);

export default deleteMyTrainerReducer;