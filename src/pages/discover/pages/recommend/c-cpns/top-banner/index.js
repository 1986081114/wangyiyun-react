import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Carousel } from 'antd';

/* 
轮播图中毛玻璃获取方式：
  利用轮播图的切换面板回调（调用的是函数）  调用useCallback获取to即下一个图片的index
  使用useState和保存currentIndex以及改变
  有个图片的坐标可以获取图片，利用js的props属性在style.js中获取图片。
*/

import { getTopBannerAction } from '../../store/actionCreators'
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style'

export default memo(function ZJTopBanner() {

    const [currentIndex, setCurrentIndex] = useState(0)

    //redux 与 组件关联
    const { topBanners } = useSelector(state => ({
        /* topBanners: state.get("recommend").get("topBanners") */
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopBannerAction())

    }, [dispatch])

    const bannerRef = useRef();

    const bannerChange = useCallback((from, to) => {
        setTimeout(() => {
            setCurrentIndex(to);
        }, 0);
      }, []);

    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
    return (
        <BannerWrapper bgImage = {bgImage}>
            <div className="banner">
                <BannerLeft>
                    <Carousel effect="fade" autoplay="true" ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map(item => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle}></img>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
