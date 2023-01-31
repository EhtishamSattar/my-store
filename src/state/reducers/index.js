import {combineReducers} from "redux"
import reducer from './cartManager'

const reducers=combineReducers({
    cartMan:reducer
})

export default reducers