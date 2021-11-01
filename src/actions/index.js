export const selectUser = (user) => {
    // console.log("You clicked :", user.name);
    return {
        type: "USER_CLICKED",
        payload: user
    }
}

export const activeProduct = (products, id) => {
    console.log()
    return {
        type: "PRODUCT_CLICKED",
        payload: products.filter(product => product.id === id),
    }
}
