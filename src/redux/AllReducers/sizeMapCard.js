import { SIZE_MAP_CARD } from "../action";

const initalState = {
  size: 20
}

export const sizeMapCard = (state = initalState, { type, size}) => { // состояние
    console.log("sizeMapCard: ", state, size, type);
    switch (type){
      case SIZE_MAP_CARD:
        return {...state,
          size};
  default:
      return state;
    }
  };