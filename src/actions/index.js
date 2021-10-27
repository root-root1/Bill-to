export const selectUser = (user) => {
    // console.log("You clicked :", user.name);
    return {
        type: "USER_CLICKED",
        payload: user
    }
}

// export const showProduct = (tprops) => {

// }
