import {ActionTypes} from '../actionTypes/actionTypes'



const productReducer = (state=[],action) => {
    switch (action.type){
        case ActionTypes.SET_PRODUCTS :
            return state;
        default:
            return state;
    }
}

export default productReducer

