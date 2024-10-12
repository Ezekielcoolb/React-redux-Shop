import React, {useState} from "react"
import { buyCake } from "../redux/cakes/CakeActions"

// to connect mapStateToProps and mapDispatchToProps to react component
import { connect } from "react-redux"

const NewCakeContainer = (props) => {   // the props is from the mapStateToProp and MapDispatchToProps
   const [number, setNumber] = useState(1)

   const handleChange = (e) => {
        setNumber(e.target.value)
   }
     return (
        <div>
            <h2>Number of cakes - {props.numberOfCakes}</h2>
            <input type="text" onChange={handleChange} value={number}></input>
            <button onClick={ () => props.buyCake(number)} >Buy {number} Cakes</button>
        </div>
    )
}
// (learn react redux selector regarding this)


// This map the state to our component props
const mapStateToProps = state => {
    return{
        numberOfCakes: state.cake.numberOfCakes
    }
}

// will map the dispatch of our action creator to the prop in our component
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

// To connect the two method to the function

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(NewCakeContainer)
