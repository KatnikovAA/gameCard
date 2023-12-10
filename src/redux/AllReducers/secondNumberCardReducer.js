import { SCND_NUMBER_ON_CARD } from "../action";

const initalState = {
  valueNumber: ""
}

export const secondNumberCardReducer = (state = initalState, { type, valueNumber}) => { // состояние
    console.log("secondNumberCardReducer: ", state, valueNumber, type);
    switch (type){
      case SCND_NUMBER_ON_CARD:
        return {...state,
            valueNumber};
  default:
      return state;
    }
  };