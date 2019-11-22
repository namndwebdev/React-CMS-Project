

const defaultState = {
    token: ""
}

var loginReducer = (state = defaultState, action)=>{
    switch(action.type){
        case 'LOGIN': 
            state.token = action.data;
            console.log(state)
        return { ...state } ;

        default: return state
    }
}

export default loginReducer;