import React, { memo } from 'react'

import {PlayerWrapper,
        PlayerRight,
        PlayerLeft} from './style'

export default memo(function ZJPlayer() {
    return (
        <PlayerWrapper>
            <div className = "content">
                <PlayerLeft>
                  <h2>playerleft1</h2>
                  <h2>playerleft2</h2>
                </PlayerLeft>
                <PlayerRight>
                  <h2>playerleft1</h2>
                  <h2>playerleft2</h2>
                  <h2>playerleft2</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
