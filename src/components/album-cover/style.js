import styled from 'styled-components'
import sprite_cover from '@/assets/img/sprite_cover.png';

export const AlbumCoverWrapper = styled.div`
width: ${props => props.width + "px"};

 .album-image {
     position: relative;
     width: ${props => props.width + "px"};
     height: ${props => props.size + "px"};
     overflow: hidden;
     margin-top: 15px;
     img {
         width: ${props => props.size + "px"};
         height: ${props => props.size + "px"};
     }
     .cover {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /* 缩进文字 允许使用负值。如果使用负值，那么首行会被缩进到左边。 */
        text-indent: -9999px;
        background: url(${sprite_cover}) no-repeat -145px -57px;
        background-position: 0 ${props => props.bgp};
     }
 }

 .album-info {
     width: ${props => props.size +"px"};
     font-size: 12px;
        .name {
            color: #000;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .artist {
            color: #666;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

    }

`