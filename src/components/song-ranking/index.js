import React, { memo } from 'react'

import {getSizeImage} from '@/utils/data-format'
import {getSongsDetailAction} from '@/pages/player/store/actionCreator'

import {ZJSongRankingWrapper} from './style'
import { useDispatch } from 'react-redux'

export default memo(function ZJSongRanking(props) {
    const {info} = props;
    const { tracks = [] } = info;

    const dispatch = useDispatch();
    const playMusic = (item) => {
        console.log(item.id)
        dispatch(getSongsDetailAction(item.id))
      
    }
    return (
        <ZJSongRankingWrapper>
            <div className = "header">
                <div className = "image">
                    <img src = {getSizeImage(info.coverImgUrl,80)} alt = ""></img>
                    <a href = "/todo" className = "cover">ranking</a>          
                </div>
                <div className = "info">
                <a href ="/todo">{info.name}</a>
                    <div>
                        <button className = "btn play"></button>
                        <button className = "btn favor"></button>
                    </div>
                </div>
            </div>
            <div className = "list">
                {
                    tracks.slice(0, 10).map((item, index) =>{
                        return (
                            <div key = {item.id} className = "item-list">
                                <div className = "rank">{index + 1}</div>
                                <div className = "info">
                                    <div className = "name">{item.name}</div>
                                    <div className = "operate">
                                        <button className = "btn play" onClick={e => playMusic(item)}></button>
                                        <button className = "btn addto"></button>
                                        <button className = "btn favor"></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className = "footer"></div>
            
        </ZJSongRankingWrapper>
    )
})
