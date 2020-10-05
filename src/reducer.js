export const initalState = {
    user:null
}

export const actionType = {
    SET_USER:"SET_USER"
};

const  reducer  = (state,action)=>{
    console.log("state ",state)
    console.log("action ",action)
    switch(action.type){
        case actionType.SET_USER:
            return {
                ...state,
                user:action.user
            }

        default:
            return state;
    }
}

export default reducer;