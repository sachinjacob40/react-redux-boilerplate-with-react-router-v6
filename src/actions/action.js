import axios from 'axios';



export const listTodo =()=>{

    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            res=>{

                dispatch({
                    type:'LIST_TODO',
                    payload:res.data
                })
            }
        )
    }
}