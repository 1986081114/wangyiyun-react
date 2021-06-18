import React, { memo } from 'react'
import {NavLink} from "react-router-dom"
import { Input } from 'antd';
import { SearchOutlined  } from '@ant-design/icons';


import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'
import {headerLinks} from "@/common/local-data"

export default memo(function ZJAppHeader() {
    /*
    页面逻辑代码 
     */
    const showSelectItem = (item, index) => {
        if(index < 3) {
            return(
            <NavLink to = {item.link}>{item.title}
            <i className="icon"></i>
            </NavLink>
            )
        }else{
            return(
            <a href = {item.link}>{item.title}</a>
            )
        }
    }
    /* 返回jsx */
    return (
        <HeaderWrapper>
           <div className = "content ">
               <HeaderLeft>
                   <a href = "#/" className = "logo">网易云音乐</a>
                   <div className = "select-list">
                       {
                           headerLinks.map((item, index) => {
                               return(
                                   <div className="select-item">
                                       {showSelectItem(item, index)}
                                   </div>
                               )
                           })
                       }
                   </div>
               </HeaderLeft>
               <HeaderRight>
                   <Input className = "search" placeholder="音乐/视频/电台/用户"  prefix={<SearchOutlined/>} />
                   <div className="center">创作者中心</div>
                  <div>登录</div>
               </HeaderRight>
           </div>


           <div className = "divider"></div>
        </HeaderWrapper>
    )
})
