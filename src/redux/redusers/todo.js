const ADD = 'ADD'
const DELETE = 'DELETE'
const DONE = 'DONE'
const IMPORTANT = ' IMPORTANT'
const DELETEALL = 'DELETEALL'
const EDIT = 'EDIT'
const EDIT2 = 'EDIT2'


const initialState = {
    todos: [
        {
            id: 1,
            title: 'value',
            isDelete: false,
            isImportant: false,
            isDone: false,
            change: false
        }
    ],
}
const state = ((state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1
                }
                ]
            }
        }
        case DELETE: {
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== action.id)
            }
        }
        case DONE: {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id == action.id) {
                        return {
                            ...item, isDone: !item.isDone
                        }
                    }
                    return item
                })
            }
        }
        case IMPORTANT: {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id == action.id) {
                        return {
                            ...item, isImportant: !item.isImportant
                        }
                    }
                    return item
                })
            }
        }
        case DELETEALL: {
            return {
                 ...state,
                 todos : []
                
            }
        }

        default: {
            return state
        }
    }
}
)
export default state


export const addTodo = (title) => {
    return (dispatch) => {
        return dispatch({ type: ADD, title })
    }
}
export const delTodo = (id) => {
    return (dispatch) => {
        return dispatch({ type: DELETE, id })
    }
}
export const doImportant = (id) => {
    return (dispatch) => {
        return dispatch({ type: IMPORTANT, id })
    }
}

export const doDone = (id) => {
    return (dispatch) => {
        return dispatch({ type: DONE, id })
    }
}
export const delAll = (title) => {
    return (dispatch) => {
        return dispatch({ type: DELETEALL })
    }
}