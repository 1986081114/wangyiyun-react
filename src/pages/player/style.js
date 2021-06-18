import styled from 'styled-components';
import wrap_bg from '@/assets/img/wrap-bg.png';

export const PlayerWrapper = styled.div`
  .content {
    background: url(${wrap_bg}) repeat-y;
    display: flex;
    background-color: #fff;
    width: 980px;
    margin: 0 auto;
    border: 1px solid #d3d3d3;
  }

`
export const PlayerLeft = styled.div`
  width: 710px;
`
export const PlayerRight = styled.div`
  width: 210px;
  padding: 20px 40px 40px 30px;
`