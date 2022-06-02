import React,{useEffect, useState} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import Actions from '../actions'


function List({todo,listTodo}){

    const dispatch=useDispatch();
    const list = useSelector(state => state.list)

    

    const [inputData,setInputData]=useState('')

    useEffect(()=>{
        dispatch(Actions.ListAction.getList());
      
    },[])


    function handleChange(event){
        setInputData(event.target.value)
    }


    function submit(){
        dispatch({  
        type:'ADD_ITEM',
        payload:inputData
    });
    }

    return(
        <div>

        <div>
            <input  onChange={handleChange}/>
            <button onClick={submit}>Submit</button>
            <br/>
        </div>    
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {
                       list.data.map(item=>(<li className="list-group-item text-dark">{item.title}  </li>))
                    }
                </ul>
            </div>
        </div>
        </div>
    )
}



export default List;