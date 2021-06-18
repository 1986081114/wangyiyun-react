import {getSongsDetail, getLyric} from '@/services/player'

import * as actionTypes from './constants';
import {getRandomNumber} from '@/utils/data-format'
import {parseLyric} from '@/utils/parse-lyric'

const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
  });

//改变歌曲播放列表事件
const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
   playList
})

//获取当前播放歌曲在播放列表的索引
const changeCurrentSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
});

const changeLyricListAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList
})

const changeCurrentLyricIndexAction = (currentLyricIndex) =>({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex
})


//点击歌曲，根据播放列表存在进行操作。
export const getSongsDetailAction = (ids) => {
    return (dispatch,getState) => {
       //根据id判断playList播放列表是否存在该歌曲
       const playList  = getState().getIn(["player", "playList"]);
       const songId = playList.findIndex(item => item.id === ids);
       
       //判断是否有歌曲
       let song = null;
       if(songId !== -1) {//有歌曲
        //给当前正在播放歌曲索引赋值
        dispatch(changeCurrentSongIndexAction(songId));
        song = playList[songId];
        //派发成为当前将要播放歌曲
        dispatch(changeCurrentSongAction(song));
        dispatch(getLyricAction(song.id));
       }else{//不存在
        //请求歌曲
        getSongsDetail(ids).then(res => {
            song = res.songs && res.songs[0];
             if (!song) return;
            const newPlayList = [...playList];
            newPlayList.push(song);

            //更新redux的值
            dispatch(changePlayListAction(newPlayList));
            dispatch(changeCurrentSongAction(song));
            dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
             //请求歌词
            dispatch(getLyricAction(song.id));
          })
         }
   
    }
}

//歌曲播放方式改变 
export const changeSequenceAction = (sequence) => ({
    type:actionTypes.CHANGE_SEQUENCE,
    sequence
})

//根据前进和后退按钮 改变当前播放歌曲事件
export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(["player", "playList"]);
        const sequence = getState().getIn(["player", "sequence"]);
        let playSongIndex = getState().getIn(["player", "playSongIndex"]);

        switch(sequence) {
            case 1: //随机播放
              let randomIndex = getRandomNumber(playList.length);
              while(randomIndex === playSongIndex) {
                  randomIndex = getRandomNumber(playList.length)
              }
              playSongIndex = randomIndex;
              break;
            default: //顺序播放 或者单曲循环
              playSongIndex += tag;
              if(playSongIndex>= playList.length) playSongIndex = 0;
              if(playSongIndex < 0) playSongIndex = playList.length - 1;
        }

        const currentSong = playList[playSongIndex];
        dispatch(changeCurrentSongIndexAction(playSongIndex));
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(getLyricAction(currentSong.id));
     }
}

//请求歌词数据
export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyric = res.lrc.lyric;
            const lyricList = parseLyric(lyric);
            dispatch(changeLyricListAction(lyricList))
        })

    }
}