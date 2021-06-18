import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from 'antd';

import {getSongsDetailAction,
        changeSequenceAction,
        changeCurrentIndexAndSongAction,
        changeCurrentLyricIndexAction} from '../store/actionCreator'
import {getSizeImage, formatDate,getPlaySong} from '@/utils/data-format'

import {AppPlayerBarWrapper,
        Control,
        PlayInfo,
        Operator} from './style'
import { NavLink } from 'react-router-dom';

export default memo(function AppPlayerBar() {

    const [currentSongTime, setcurrentSongTime] = useState(0)
    //进度条位置
    const [progress, setProgress] = useState(0);
    //判断当前滑动是人为的还是歌曲播放改变的
    //如果人为正在滑动，歌曲改变的就不能g给progress赋值，只能等人为滑动结束之后在赋值，
    const [isChange, setIsChange] = useState(false);

    const [isPlaying, setIsPlaying] = useState(false)


    const { currentSong, sequence, lyricList, currentLyricIndex} = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        sequence: state.getIn(["player", "sequence"]),
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    }))
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getSongsDetailAction(167876)) 
    }, [dispatch])
    
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        //每次歌曲改变时就会调用这个函数，进行歌曲自动播放
        audioRef.current.play().then( res => {
            setIsPlaying(true);
        }).catch(err => {
            setIsPlaying(false);
          });
    }, [currentSong])

    const audioRef = useRef();

    // other handle 在这里放置取不到文件可以设置默认值
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const duration = currentSong.dt || 0;
    const showDuration = formatDate(duration, "mm:ss");
    const showCurrentTime = formatDate(currentSongTime, "mm:ss"); 

     //播放音乐
    const playMusic =useCallback(()=> {
        isPlaying? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying);
    },[isPlaying])
    
    //更新音乐播放时间
    const updateTime = (e) => {
         //如果此时，是人为在滑动，，就不能让歌曲正常播放时间赋值给当前时间 与进度条
         let currentTime = e.target.currentTime
        if(!isChange) {
            setcurrentSongTime(currentTime * 1000);
            setProgress(currentSongTime/ duration *100);
        }  
        let i = 0;
        for(; i< lyricList.length; i++) {
            let lyricItem = lyricList[i];
            if(currentTime * 1000 < lyricItem.time) {
                break;
            }
        }
        //如果直接派发，会非常频繁性能不好，所以应该只有在i改变了在派发
        /* dispatch(changeCurrentLyricIndexAction(i-1)) */
        if(currentLyricIndex !== i-1) {
            dispatch(changeCurrentLyricIndexAction(i-1));
        }
    }

    //人为滑动进度条
    const sliderChange =useCallback( (value) => {
        setIsChange(true);
        setProgress(value)
    },[]);
    //人为滑动进度条结束
    const sliderAfterChange = useCallback( (value) => {
        const currentTime = value / 100 * duration / 1000;
        audioRef.current.currentTime = currentTime;
        /*
        这里需要注意： 当进度条改变了之后，时间也会改变，组件重新渲染，如果不渲染组件内的currentSongtime
          在运行 updateTime函数时调用的currentSongTime还是之前的，导致滑动位置会一闪。
         */
        setcurrentSongTime(currentTime * 1000);
        setIsChange(false);

        if(!isPlaying) {
            playMusic();
        }
    },[duration, isPlaying, playMusic])

    //歌曲播放方式改变
    const changeSequence = () => {
        let currentSequence = sequence+1;
        if(currentSequence> 2) {
            currentSequence = 0;
        }
        dispatch(changeSequenceAction(currentSequence));
    } 
   //向前，向后button 改变当前播放歌曲
    const changeCurrentSong = (tag) => {
        dispatch(changeCurrentIndexAndSongAction(tag))
        
    }

    const handleMusicEnd = () => {
        if(sequence === 2){
            //单曲循环
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }else {
            dispatch(changeCurrentIndexAndSongAction(1))
        }
    }

    return (
        <AppPlayerBarWrapper>
           <div className = "content">
               <Control isPlaying = {isPlaying}>
                   <button className = "prev" onClick = {e => changeCurrentSong(-1)}></button>
                   <button className = "play" onClick = {e => playMusic()}></button>
                   <button className = "next" onClick = {e => changeCurrentSong(+1)}></button>
               </Control>
               <PlayInfo>
                   <div className="image">
                       <NavLink to="/discover/player">
                           <img src = {getSizeImage(picUrl, 35)} alt = ""></img>
                       </NavLink>
                   </div>
                   <div className = "info">
                       <div className = "song">
                           <a href = "/todo" className = "song-name">{currentSong.name}</a>
                           <a href = "/todo" className = "singer-name">{singerName}</a>
                       </div>
                       <div className = "progress">
                            <Slider 
                              defaultValue = {30} 
                              value = {progress}
                               onChange = {sliderChange}
                               onAfterChange={sliderAfterChange}/>
                            <div className = "time">
                               <span className="now-time">{showCurrentTime}</span>
                               <span className="divider">/</span>
                               <span className="duration">{showDuration}</span>
                            </div>
                       </div>
                   </div>
               </PlayInfo>
               <Operator sequence = {sequence}>
                <div className="left">
                    <button className="btn favor"></button>
                    <button className="btn share"></button>
                </div>
                <div className="right">
                    <button className=" btn volume"></button>
                    <button className=" btn loop" onClick = {e => changeSequence()}></button>
                    <button className="btn playlist"></button>
                </div>

               </Operator>
           </div>
           <audio ref = {audioRef}  onTimeUpdate = {e => updateTime(e)} onEnded = {handleMusicEnd}></audio>
        </AppPlayerBarWrapper>
    )
})
