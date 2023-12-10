import { CLICK_PLAY } from "../action";
import { WIN_PLAY } from "../action";

const initalState = {
  boolean: false
}

export const booleanPlay = (state = initalState , { type, boolean}) => { // состояние
  console.log("booleanPlay: ", state, boolean, type);
    switch (type){
      case CLICK_PLAY:
          return {...state,
            boolean};
      case WIN_PLAY:
          return {...state,
            boolean};
    default: 
      return state;
    }
  };