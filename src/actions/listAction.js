import axios from 'axios';


const getList =(params)=>(dispatch) =>{


        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            res=>{
               
                dispatch({
                    type:'GET_LIST',
                    payload:res.data.slice(0,5)     //To get only the first 5 elements
                })
            }
        )
    }


const addItem = () => (dispatch) =>{

    //Add any api call if  required.In the current scenario its not required

}


export default { getList,addItem};