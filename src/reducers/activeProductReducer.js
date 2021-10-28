export default (state=null, action) => {
    switch(action.type) {
        case "PRODUCT_CLICKED":
            return action.payload;
    }
    return state
}
