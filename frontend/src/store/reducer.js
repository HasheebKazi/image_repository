import * as actionTypes from './actions';

const initialState = {
    loggedIn: false
};

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case actionTypes.LOGIN:
            return {
                loggedIn: !state.loggedIn
            }
        default:
            return state;
    }
}

export default reducer;