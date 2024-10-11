import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/IceCreamAction";

const IceCreamContainer = (props) => {
    return (
        <div >
            <h2>Number of Ice Cream - {props.numberOfIceCream} </h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        numberOfIceCream : state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}
export default connect(
    mapStateToProp,
    mapDispatchToProps
    )(IceCreamContainer)