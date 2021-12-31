import { combineReducers } from "redux";
import {users} from './user'
import 'semantic-ui-css/semantic.min.css'
import {questions} from './questions'
import { authUser } from "./authuser";
import {loadingBarReducer} from 'react-redux-loading'
export default combineReducers({
users,
questions,
authUser,
loadingBar:loadingBarReducer,
})