var tokenReducer = (state = "", action)=>{
    switch(action.type){
        case 'SET_TOKEN': 
            return action.newToken;

        default: return state
    }
}

export default tokenReducer;