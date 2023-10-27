import { COUNT_CLICK } from "../action";
import { CANCEL_COUNT } from "../action";

const initalState = {
  click: 1
}

export const clickOnCardReducer = (state = initalState , {type,click}) => { // состояние
  console.log("clickOnCardReducer: ", state, state.click, type);
    switch (type){
      case COUNT_CLICK: 
          return {...state,
            click: state.click + 1
        };
      case CANCEL_COUNT: 
        return {...state,
          click: 1
      };
    default: 
      return state;
    }
  };