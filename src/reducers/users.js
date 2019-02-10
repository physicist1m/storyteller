import { USERS_LOADED } from "../actions/types";

const initState = {
    users: []
};

const users = (state = initState, action) => {
    switch (action.type) {
        case USERS_LOADED:
            return {
                users: action.payload
            };
        default:
            return state;
    }
}

export default users;