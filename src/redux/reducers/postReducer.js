const defaultState = {
  title:"",
  content:""
}

var postReducer = (state = defaultState,action) =>{

  switch (action.type) {
    case "POST" :
  //  console.log(typeof(action.data));
  //  console.log(action.data);
   return action.data
     
   
  
    default:
    return state
  }
}

export default postReducer