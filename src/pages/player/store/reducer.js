import { Map} from 'immutable'

import * as actionTypes from './constants';

const defaultState = Map({
    //播放列表
    playList:[],
    //当前播放歌曲在列表的位置
    playSongIndex:0,
    //当前播放个去信息
    currentSong: {},
    sequence: 0,//歌曲播放方式， 0 循环， 1 随机， 2 单曲
    lyricList: [],
    currentLyricIndex:0
})

function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("playSongIndex", action.index);
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence",action.sequence); 
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set("lyricList", action.lyricList);
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.currentLyricIndex);
        default:
            return state;
    }
}

export default reducer