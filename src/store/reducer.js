import { combineReducers } from 'redux-immutable';
/* 
redux-immutable 的combineReducers 会使用immutable进行浅层比较修改数据
*/

import { reducer as recommendReducer } from '../pages/discover/pages/recommend/store'
import {reducer as playerReducer} from '../pages/player/store'

const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer
});
export default cReducer;