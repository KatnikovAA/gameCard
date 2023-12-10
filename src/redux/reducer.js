import { CLICK_PLAY, SIZE_MAP_CARD } from "./action";
import { combineReducers } from "redux"
import { booleanPlay } from "./AllReducers/booleanPlay";
import { sizeMapCard } from "./AllReducers/sizeMapCard";
import { clickOnCardReducer } from "./AllReducers/clickOnCardReducer";
import { firstNumberCardReducer } from "./AllReducers/firstNumberCardReducer";
import { secondNumberCardReducer } from "./AllReducers/secondNumberCardReducer";
import { countForWinReducer } from "./AllReducers/countForWinReducer";

export  const reducer = combineReducers({
   booleanPlay,
   sizeMapCard,
   clickOnCardReducer,
   secondNumberCardReducer,
   firstNumberCardReducer,
   countForWinReducer,
  });
  
  