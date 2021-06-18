import styled from 'styled-components'
import sprite_cover from '@/assets/img/sprite_cover.png';
import sprite_02 from '@/assets/img/sprite_02.png';
import sprite_icon2 from '@/assets/img/sprite_icon2.png';

export const ZJSongRankingWrapper = styled.div`
width: 230px;
  .header{
    height: 100px;
    margin: 20px 0 0 20px;
    display: flex;
      .image{
          position: relative;
          width: 80px;
          height: 80px;
          img{
              width: 80px;
              height: 80px;
          }
          .cover{
            position:absolute;
            left: 0;
            top: 0px;
            width: 100%;
            height: 100%;
            text-indent: -9999px;
            background: url(${sprite_cover}) no-repeat -145px -57px;
          }
      }
      .info{
          margin: 5px 0 0 10px;
          a {
              display: inline-block;
              font-size: 14px;
              color: #333;
              font-weight: 700;
          }
          .btn{
              display: inline-block;
              text-indent: -9999px;
              height: 22px;
              width: 22px;
              margin: 8px 10px 0 0;
              cursor: pointer;

          }
          .play{
            background: url(${sprite_02}) no-repeat 0 9999px;
            background-position: -267px -205px;

          }
          .favor{
              background: url(${sprite_02}) no-repeat 0 9999px;
              background-position: -300px -205px;

          }
      }
  }
  .list{
      height: 319px;
      margin-left: 20px;
      line-height: 32px;
      .item-list {
          display: flex;
          height: 32px;
          align-items: center;

          :nth-child(-n+3) .rank {
            color: #c10d0c;
      }
          
          .rank {
            width: 10px;
            color: #666;
            font-size: 16px;
            text-align: center;
          }
          .info {
            width: 180px;
            height: 17px;
            line-height: 17px;
            margin-left: 20px;
            display: flex;
            justify-content: space-between;

            .name {
                flex: 1;
                font-size: 12px;
                color: #000;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .operate {
                width:82px;
                display: flex; 
                display:none;
                
                .btn {
                    height: 17px;
                    width: 17px;
                    margin-left: 8px;
                    cursor: pointer;
                }
                .play{
                    background: url(${sprite_02}) no-repeat 0 9999px;
                    background-position: -267px -268px;
                }
                .addto{
                    background: url(${sprite_icon2}) no-repeat 0 9999px;
                    background-position: 0 -700px;
                }
                .favor{
                    background: url(${sprite_02}) no-repeat 0 9999px;
                    background-position: -297px -268px;
                }  
            }
          }
          &:hover {
             .operate {
                display: block;
        }
      }

      }
  }
  .footer{}
`