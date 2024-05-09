import { ADD_TODO , STATUS } from "./action"
const init= {
    todos:[]
}
const todoReducer = (store=init , {type,payload}) => {
    switch(type){
        case ADD_TODO :
            return {...store,todos:[...store.todos,payload]}
        case STATUS :
            let index = store.todos.findIndex((elem)=>elem.title === payload.title)
            store.todos[index].status = payload.status
            return {...store,todos:[...store.todos]}
        default :
            return store
    }
}

export default todoReducer;