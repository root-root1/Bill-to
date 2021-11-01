export default (state=null, action) => {
    switch(action.type) {
        case "PRODUCT_CLICKED":
            // console.log(action.payload)
            return action.payload;
    }
    return state
}
