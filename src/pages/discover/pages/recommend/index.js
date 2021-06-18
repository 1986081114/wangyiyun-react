import React, { memo } from 'react'

import {
  RecommendWrapper,
  Content,
  ContentLeft,
  ContentRight
} from './style'

import ZJTopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import ZJNewAlbum from './c-cpns/new-album'
import ZjRanking from './c-cpns/ranking'

function ZJRecommend(props) {
    
    return (
        <RecommendWrapper>
          <ZJTopBanner/>
          <Content>
            <ContentLeft>
              <HotRecommend/>
              <ZJNewAlbum/>
              <ZjRanking/>
            </ContentLeft>
            <ContentRight></ContentRight>
          </Content>
        </RecommendWrapper>
    )
  }
  
  export default memo(ZJRecommend);

/* function ZJRecommend(props) {
    const { getBanners } = props;

  useEffect(() => {
     getBanners();
   }, [getBanners])

   
    return (
        <div>
            ZJRecommend
        </div>
    )
}

 const mapStateToProps = state => ({
   topBanners: state.recommend.topBanners
 });

 const mapDispatchToProps = dispatch => ({
   getBanners: () => {
     dispatch(getTopBannerAction())
   }
 })

export default connect(mapStateToProps, mapDispatchToProps)(memo(ZJRecommend)); */