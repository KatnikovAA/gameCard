import { FRST_NUMBER_ON_CARD } from "../action";

const initalState = {
    value: ""
}

export const firstNumberCardReducer = (state = initalState, { type, value}) => { // состояние
    console.log("firstNumberCardReducer: ", state, value, type);
    switch (type){
      case FRST_NUMBER_ON_CARD:
        return {...state,
            value};
  default:
      return state;
    }
  };