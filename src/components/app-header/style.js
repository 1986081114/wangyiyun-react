import styled from "styled-components";
import sprite_01 from '@/assets/img/sprite_01.png';

export const HeaderWrapper = styled.div `
height: 75px;
background-color: #242424;
font-size: 14px;
color: #fff;

.content{
    height: 70px;
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

}

.divider {
    height: 5px;
    background-color: #C20C0C;
}`

export const HeaderLeft = styled.div`
   display: flex;

  .logo {
      display: block;
      width: 157px;
      height: 100%;
      /* 
      在这里引入路径需要使用模板字符串
      同时需要注意引入顺序，即先引入图片路径之后再引入，再通过background-position来移动背景图，从而显示出我们想要显示出来的部分。
      因为background属性等有多个属性值的， background属性默认值覆盖单个属性值
      css样式越具体，优先级越高
       */
      background: url(${sprite_01}) no-repeat 0 9999px;
      background-position: 0 0;  
      text-indent: -9999px;
  }

  .select-list {
      display: flex;
      line-height: 70px;
      margin-left: 20px;

      .select-item {
        position: relative;
        a {
            display: block;
            padding: 0 20px;
            color: #ccc;   
        }
        :last-of-type a {
            position: relative;
            ::after {
              position: absolute;
              content: "";
              width: 28px;
              height: 19px;
              background-image: url(${sprite_01});
              background-position: -190px 0;
              top: 20px;
              right: -15px;
            }
          }

          &:hover a, a.active {
            color: #fff;
            background: #000;
            text-decoration: none;
          }
          .active .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            background: url(${sprite_01}) no-repeat 0 9999px;
            transform: translate(-50%, 0);
            background-position: -226px 0;
          }
          
      }
  }

`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    
    input {
        &::placeholder {
          font-size: 12px;
          color: black;
        }
      }
  }

  .center {
    width: 90px;
    height: 32px;
    margin: 0 16px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    background-color: transparent;

  }
`