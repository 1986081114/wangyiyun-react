import React, { memo } from 'react'

import {ZJHotRecommendRCMWrapper} from './style'

export default memo(function ZJHotRecommendRCM(props) {
    const {title, keyWord = []} = props;
    return (
        <ZJHotRecommendRCMWrapper>
            <div className = "left">
                <div className = "title">{title}</div>
                <div className = "keyword">
                    {
                        keyWord.map((item, index) => {
                            return (
                                <div className = "item">
                                   <a href="todo">{item}</a>
                                   <span className = "divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className = "right"> 
            <a href="todo">更多</a>
            <i className="icon"></i>
            </div>
        </ZJHotRecommendRCMWrapper>
    )
})
