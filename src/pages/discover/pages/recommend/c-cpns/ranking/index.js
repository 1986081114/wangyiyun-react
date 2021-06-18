import React, { memo, useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'

import {getTopListAction} from "../../store/actionCreators"

import ZJHotRecommendRCM from '@/components/theme-header-rcm'
import ZJSongRanking from '@/components/song-ranking' 
import { RankingWrapper } from './style';

export default memo(function ZJRanking() {
  
     const {upRanking, newRanking, originRanking} = useSelector(state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"]),
     }),shallowEqual);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    }, [dispatch])
    return (
        <RankingWrapper>
            <ZJHotRecommendRCM title = "榜单"></ZJHotRecommendRCM>
            <div className = "tops">
                <ZJSongRanking info = {upRanking}/>
                <ZJSongRanking info = {newRanking}/>
                <ZJSongRanking info = {originRanking}/>
            </div>
        </RankingWrapper>
    )
})
