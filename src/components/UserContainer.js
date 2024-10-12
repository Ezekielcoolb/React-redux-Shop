import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/UserAction";

const UserContainer = ({userData, fetchUsers }) => {
    useEffect (()=> {
        fetchUsers()
    }, [fetchUsers])
    return userData.loading ? (
        <div><h2>Loading........</h2></div>
    ) : userData.error ? (
        <div><h2>{userData.error}</h2></div>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
            {userData && userData.users && userData.users.map(user => 
                <ul><li>{user.name}</li></ul>
            )}
            </div>
        </div>
    )
}

// 

const mapStateToProp = (state) => {
    return {
        userData : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProp,
    mapDispatchToProps)(UserContainer)