import React from "react"
import { buyCake } from "../redux/cakes/CakeActions"

// to connect mapStateToProps and mapDispatchToProps to react component
import { connect } from "react-redux"

const CakeContainer = (props) => {   // the props is from the mapStateToProp and MapDispatchToProps
    return (
        <div>
            <h2>Number of cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake} >Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

// To connect the two method to the function

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CakeContainer)
