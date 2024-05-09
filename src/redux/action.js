export const ADD_TODO="ADD_TODO";
export const STATUS = "STATUS" ;

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload:data
    }
}

export const editStatus = (data) => {
    return {
        type: STATUS,
        payload:data
    }
}