import { BUY_ICECREAM } from "./IceCreamTypes";

const initialIceCream = {
    numberOfIceCream : 20
}
const IceCreamReducer = (state = initialIceCream, action) => {
    switch(action.type) {
        case BUY_ICECREAM : 
        return {
            ...state,
            numberOfIceCream : state.numberOfIceCream - 1
        }
        default : return state
    }
}

export default IceCreamReducer