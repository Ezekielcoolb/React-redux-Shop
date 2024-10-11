import React from "react";

// to access state in the redux you can use "useSelector" to dispatch an action to redux use "useDispatch"
// import useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakes/CakeActions";

const HookCakeContainer = () => {
    // Call the use sellector in the component that needs it
    // To access the number of cakes in the redux state and store in a variable. Do the bellow
    const numberOfCakes = useSelector( state => state.cake.numberOfCakes)  // it accept selector function as its parameter which receive the redux state as its argument which can be stored in a constat
    
    //    to dispatch an action to the redux call the useDispatch   
    // it returns a reference to the action in the redux store. and u can store it in a variable to use later
    const dispatch = useDispatch()
   return (
        <div>
            <h2>Num of cakes - {numberOfCakes}</h2>
            <button onClick={ () => dispatch(buyCake()) }>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer