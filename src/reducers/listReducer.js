import {combineReducers} from 'redux'

const initialState={
    data:[],
    apiSuccess:false
}

export default (state=initialState,action)=>{
    const tempState ={...state}

   

   switch(action.type){
        case 'GET_LIST': {
            tempState.data=action.payload;
            tempState.apiSuccess=true;


            return tempState;
        }


        case 'ADD_ITEM':{
            tempState.data=[...tempState.data, {userId: 1, id: 1, title: action.payload, completed: false}]
           
            return tempState;
        }

        default:
            return state;


    }
}

