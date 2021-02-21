const reducer = (state, action) => {
  switch (action.type) {
    case "DECREASE_AMOUNT": {
      let tempData = state.data.map((reward) => {
        if (reward.id === action.payload && reward.remaining) {
          return { ...reward, remaining: reward.remaining - 1 };
        }
        return reward;
      });
      return { ...state, data: tempData };
    }
    case "GET_TOTAL": {
      let newTotal = state.total;
      let newBackers = state.backers;
      newTotal += action.payload;
      newBackers += 1;
      return { ...state, backers: newBackers, total: newTotal };
    }
  }
};

export default reducer;
