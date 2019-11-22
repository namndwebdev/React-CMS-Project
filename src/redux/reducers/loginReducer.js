

const defaultState = {
    token:"",
    username:""
}

var loginReducer = (state = defaultState, action)=>{
    switch(action.type){
        case 'LOGIN': 
            state.username = action.data.user.username;
            state.token = action.data.token
        
            console.log(state)
        return { ...state } ;

        default: return state
    }
}

export default loginReducer;