export const selectUser = (user) => {
    // console.log("You clicked :", user.name);
    return {
        type: "USER_CLICKED",
        payload: user
    }
}

export const activeProduct = (product) => {
    return {
        type: "PRODUCT_CLICKED",
        payload: product /*{
            item: id === ''? '' : products.filter(product => product.id === id)
        }*/
    }
}
