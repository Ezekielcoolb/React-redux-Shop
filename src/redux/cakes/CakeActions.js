import { BUY_CAKE } from "./CakeTypes"

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number  // the payload is to supply the number prop to reducer which is accessed by thereducer
    }
}

