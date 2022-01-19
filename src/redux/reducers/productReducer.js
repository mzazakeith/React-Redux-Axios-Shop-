import {ActionTypes} from '../actionTypes/actionTypes'

const initialState ={
      products:[
          {
              id:1,
              title:" Mzaza",
              category:"programmer",
          },
      ],
};

const productReducer = (state=initialState,action) => {
    switch (action.type){
        case ActionTypes.SET_PRODUCTS :
            return state;
        default:
            return state;
    }
};

export default productReducer