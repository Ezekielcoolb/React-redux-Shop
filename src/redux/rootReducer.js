import { combineReducers } from "redux";
import CakeReducer from "./cakes/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import UserReducer from "./user/UserReducer";


export const rootReducer =  combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    user: UserReducer
})