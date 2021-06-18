import React, { memo } from 'react'

import { SongCoverWrapper } from './style'
import {getCount, getSizeImage} from '@/utils/data-format'

export default memo(function ZJSongsCover(props) {
    const { info } = props;
    return (
        <SongCoverWrapper>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl, 140)} alt="" />
                <div className="cover">
                    <div className="info">
                        <span>
                            <i className="erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom">
                {info.name}
            </div>
            <div className="cover-source">
                by {info.copywriter || info.creator.nickname}
            </div>
 
        </SongCoverWrapper>
    )
})
