export default (state=null, action) => {
    switch(action.type){
        case "USER_CLICKED":
            return action.payload;
    }
    return state;
}