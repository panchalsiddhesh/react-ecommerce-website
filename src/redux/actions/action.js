//add items
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

//remove items
export const REMOVE = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id
    }
}

//remove single item
export const REMOVE_SINGLE = (item) => {
    return {
        type: "REMOVE_CART_SINGLE",
        payload: item
    }
}