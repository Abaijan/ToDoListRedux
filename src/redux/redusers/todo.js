
const initialState = {
    todos:[]
}
 const state = ((state = initialState, action) =>{
    switch(action.type){
        case 'ADD': {
            return {
                ...state,
                todos: [...state.todos, {title: action.title,
                id: Date.now()}]
            }
        }
        case 'DEL': {
            return{
                ...state,
                todos: state.todos.filter((el) => el.id !== action.id)
            }
        }


        default: {
            return state
        }
    }
}
 )
 export default state
export const addTodo = (title) =>{
    return(dispatch) =>{
        return dispatch({type: 'ADD', title})
    }
}
export const delTodo = (id) =>{
    return(dispatch) =>{
        return dispatch({type: 'DEL', id})
    }
}