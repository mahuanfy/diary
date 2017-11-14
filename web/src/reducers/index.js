import {combineReducers} from 'redux';

import Diary from './diary'
import Login from './login'
import ExcellentDiary from './excellentDiary'

export default combineReducers({
    Diary, Login, ExcellentDiary
})