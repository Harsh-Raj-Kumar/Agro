import { SAVE_USER_INFO } from "../actions/action.types";

const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_USER_INFO:
            return {
                ...state,
                sme: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;