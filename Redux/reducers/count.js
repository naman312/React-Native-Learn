
const initialState={
    count: 90
} 

const countReducer=(state='not typed',action)=>{
    console.log("hey called")
    switch(action.type){
        // case 'INCREMENT': 
       
        //  return(state+1)
           
        // case 'DECREMENT':
       
        //  return(state-1)

        case 'SUCESS':
            return (state='true')
        case 'FAILED':
            return (state='false')
         default: 
         return state;
    }
}
export default countReducer;