import {combineReducers} from 'redux'



const listReducer=(state=[],action)=>{
    if(action.type==='LIST_TODO'){
        return action.payload;
    }
    else{
        return state;
    }
}


export default combineReducers({
    list:listReducer
})