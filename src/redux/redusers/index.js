import { combineReducers } from "redux";
import todos from './todo'
const rootReduser =(initialState) => combineReducers({
    todos
})
export default rootReduser