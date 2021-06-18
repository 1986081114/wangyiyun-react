import styled from 'styled-components'

import sprite_02 from '@/assets/img/sprite_02.png';

export const ZJHotRecommendRCMWrapper = styled.div`
    height: 33px;
    padding: 0 10px 0 34px;
    border-bottom:2px solid #C10D0C;
    background: url(${sprite_02}) no-repeat 0 9999px;
    background-position: -225px -156px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        display: flex;
        align-items:center;
        
        .title {
            font-size: 20px;
            padding-right: 20px;
            font-weight: normal;
            line-height: 28px;
        }

        .keyword {
            display: flex;
            .item {
                .divider {
                 margin: 0 15px;
                 color: #ccc;
                 }
            }
        }
    }

    .right {
       display: flex;
       align-items:center;
       .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        background: url(${sprite_02}) no-repeat 0 9999px;
        background-position: 0 -240px;
       }

    }
`