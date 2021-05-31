import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {listTodo} from '../actions/action'


function List({todo,listTodo}){


    useEffect(()=>{
        listTodo()
    },[])


    return(
        <div className="row">
            <div className="col">
                <ul className="list-group">
                    {
                        todo.map(item=>(<li className="list-group-item text-dark">{item.title}</li>))
                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { todo: state.list }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        listTodo:()=>dispatch(listTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);