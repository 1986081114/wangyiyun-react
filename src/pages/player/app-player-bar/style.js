import styled from 'styled-components'
import playbar_sprite from '@/assets/img/playbar_sprite.png';
import sprite_icon from '@/assets/img/sprite_icon.png';
import progress_bar from '@/assets/img/progress_bar.png';

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: 52px;
  background: url(${playbar_sprite}) repeat 0 9999px;
  background-position: 0 0;

  .content {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: 0;
      height: 47px;
      display: flex;
      width: 980px;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;
  }
  `

export const Control = styled.div`
    display: flex;
    align-items: center;
  .prev,.next {
     height: 28px;
     width: 28px;
     background: url(${playbar_sprite}) repeat 0 9999px;
  }
  .prev {
    background-position: 0 -130px;
  }
  .play {
      width: 36px;
      height: 36px;
      margin: 0 8px;
      background: url(${playbar_sprite}) repeat 0 9999px;
      background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
  }
  .next {
    background-position: -80px -130px;
  }
`
export const PlayInfo = styled.div`
    display: flex;
    align-items: center;
    width: 642px;
  .image {
     width: 34px;
     height: 34px;
     border-radius: 5px;
    img {
        width: 34px;
        height: 34px;
        border-radius: 5px;
    }
  }
  .info {
      flex: 1;
      margin-left: 10px;
      .song {   
        position: relative;
        top: 8px;
        left: 8px;
      .song-name {
        color: #e8e8e8;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        }
      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
      }
      .progress {
          display:flex;
          justify-content: space-between;
          color: #a1a1a1;

            .ant-slider {
                width: 493px;
                margin-right: 10px;

            .ant-slider-rail {
                height: 9px;
                background: url(${progress_bar}) right 0;
            }

            .ant-slider-track {
                height: 9px;
                background: url(${progress_bar}) left -66px;
                }

            .ant-slider-handle {
                width: 22px;
                height: 24px;
                border: none;
                margin-top: -7px;
                background: url(${sprite_icon}) 0 -250px;
                }
        }

            .time {
                .now-time {
                color: #e1e1e1;
                }
                .divider {
                margin: 0 3px;
                }
               
            }

   }
  }

`
export const Operator = styled.div`
  display: flex;
  align-items: center;

  .btn {
    width: 25px;
    height: 25px;
    margin: 11px 2px 0 0;
    cursor: pointer;
    background: url(${playbar_sprite}) repeat 0 9999px;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
      margin-left: 13px;
      background-position: -147px -248px;
    .volume {
      background-position: -2px -248px;

    }

    .loop {
      background-position: ${
        props => {
          switch(props.sequence) {
            case 1:
             return "-66px -248px"
            case 2:
             return "-66px -344px"
            default:
             return "-3px -344px"
          }
        }
      };
    }
    .playlist {
      width: 59px;
      background-position: -42px -68px;
    }
  }


`
