import {ActionTypes} from '../actionTypes/actionTypes'

const productReducer = (state=[],action) => {
    switch (action.type){
        case ActionTypes.SET_PRODUCTS :
            return {
                ...state, products:action.payload
    }
        default:
            return state;
    }
};

export default productReducer