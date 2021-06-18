import React, { memo, useEffect, useRef } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import { Carousel } from 'antd';

import {getNewAlbumAction} from '../../store/actionCreators'

import ZJHotRecommendRCM from '@/components/theme-header-rcm'
import ZJAlbumCover from '@/components/album-cover'
import {AlbumWrapper} from './style'

export default memo(function ZJNewAlbum() {

    const {newAlbums} = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
       
    }, [dispatch])

    const CarouselRef = useRef()
    return (
        <AlbumWrapper>
            <ZJHotRecommendRCM title = "新碟上架"></ZJHotRecommendRCM>
            <div className="content">
                <button className = "arrow arrow-left" 
                onClick = {e => CarouselRef.current.prev() }></button>
                <div className = "album">
                    <Carousel dots={false} ref={CarouselRef}>
                        {
                            [0,1].map(item => {
                                return (
                                    <div className = "page" key = {item}>
                                       {
                                           newAlbums.slice(item*5, (item+1)*5).map(iten => {
                                               return <ZJAlbumCover 
                                                key={iten.id} 
                                                info={iten} 
                                                size={100} 
                                                width={118} 
                                                bgp="-570px"/>
                                           })
                                       }
                                    </div>
                                )
                            }) 
                        }

                    </Carousel>
                </div>
                <button className = "arrow arrow-right"
                 onClick = {e => CarouselRef.current.next()}></button>
            </div> 
        </AlbumWrapper>
    )
})
