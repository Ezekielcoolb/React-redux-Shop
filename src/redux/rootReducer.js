import { combineReducers } from "redux";
import CakeReducer from "./cakes/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";

export const rootReducer =  combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer
})