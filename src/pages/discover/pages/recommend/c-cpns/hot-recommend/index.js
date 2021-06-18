import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { HotRecommendWrapper } from './styled'
import { getHotRecommendAction } from '../../store/actionCreators';

import ZJHotRecommendRCM from '@/components/theme-header-rcm'
import ZJSongsCover from '@/components/song-cover';

export default memo(function ZJHotRecommend() {

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ZJHotRecommendRCM title="热门推荐" keyWord={["华语", "流行", "民谣", "摇滚", "电子"]}></ZJHotRecommendRCM>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <ZJSongsCover key={item.id} info={item} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
