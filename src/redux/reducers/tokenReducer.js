var tokenReducer = (state = { money: 0 }, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      var newState = state;
      newState.money = action.money;
      return {
        money: action.money
      };

    default:
      return state;
  }
};

export default tokenReducer;
