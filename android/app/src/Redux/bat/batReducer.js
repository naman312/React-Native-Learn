const BUY_BAT='BUY_BAT'
const initialState={
    numofBats: 20
}
const BatReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'BUY_BAT':
            return {...state, numofBats: state.numofBats - 1}
        default:
            return state    
        }
}
export default BatReducer;