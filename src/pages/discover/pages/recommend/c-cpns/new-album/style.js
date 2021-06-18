import styled from "styled-components"
import sprite_02 from '@/assets/img/sprite_02.png'

export const AlbumWrapper = styled.div`
  margin-top: 50px;
  .content {
      height: 186px;
      background-color: #f5f5f5;
      border: 1px solid #d3d3d3;
      margin: 20px 0 37px;
      display: flex;
      align-items: center;

      .arrow {
          width: 25px;
          height: 25px;
          cursor: pointer;
      }
      .arrow-left {
        background: url(${sprite_02}) no-repeat 0 9999px;
        background-position: -260px -75px;
      }
      .arrow-right {
          background: url(${sprite_02}) no-repeat 0 9999px;
          background-position: -300px -75px;
      }
      .album {
          width: 640px;
          height: 150px;

        .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }

      }
  }
`