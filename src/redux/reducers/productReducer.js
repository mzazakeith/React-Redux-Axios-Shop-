import {ActionTypes} from '../actionTypes/actionTypes'

export const productReducer = (state=[],action) => {
    switch (action.type){
        case ActionTypes.SET_PRODUCTS :
            return {
                ...state, products:action.payload
    }
        default:
            return state;
    }
};

export const selectedProductReducer = (state={},action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state, ...action.payload
            }
         case ActionTypes.REMOVE_SELECTED_PRODUCT:
             return {};       
        default:
           return state;
    }
}