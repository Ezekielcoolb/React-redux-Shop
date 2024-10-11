import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/IceCreamAction";


const HookIceCreamContainer = () => {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of IceCream - {numberOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>buy Ice Cream</button>
        </div>
    )
}
export default HookIceCreamContainer