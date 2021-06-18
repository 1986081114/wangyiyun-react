import styled from "styled-components";
import sprite_cover from '@/assets/img/sprite_cover.png';
import sprite_icon from '@/assets/img/sprite_icon.png';

export const SongCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${props => (props.right || 0)} 20px 0;

  .cover-top {
    position: relative;

    &>img {
      width: 140px;
      height: 140px;
    }
    
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width:100%;
      height: 100%;
      background: url(${sprite_cover}) no-repeat 0 9999px;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        height: 27px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        color: #ccc;
        background: url(${sprite_cover}) no-repeat 0 9999px;
        background-position: 0 -537px;
        

        .erji {
          display: inline-block;
          margin-right: 5px;
          width: 14px;
          height: 11px;
          background: url(${sprite_icon}) no-repeat 0 9999px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background: url(${sprite_icon}) no-repeat 0 9999px;
          background-position: 0 0;
        }
      }
    }
  }

  .cover-bottom {
      font-size: 14px;
      color: #000;
      margin-top: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
   
  }

  .cover-source {
    color: #666;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
   
  }
`