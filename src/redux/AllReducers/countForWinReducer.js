import { COUNT_FOR_WIN } from "../action";

const initalState = {
  countWin: 0
}

export const countForWinReducer = (state = initalState , {type,countWin}) => { // состояние
  console.log("countForWinReducer: ", state, state.countWin, type);
    switch (type){
      case COUNT_FOR_WIN: 
          return {...state,
            countWin: state.countWin + 2
        };
    default: 
      return state;
    }
  };