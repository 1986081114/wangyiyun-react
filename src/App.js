import React, { memo } from 'react';
import {renderRoutes} from 'react-router-config';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import routers from './routers'
import store from './store'

import ZJAppHeader from '@/components/app-header'
import ZJAppFooter from '@/components/app-footer'
import AppPlayerBar from "./pages/player/app-player-bar"


export default memo(function App() {
  return (
    <Provider store = {store}>
    <HashRouter>
      <ZJAppHeader/>
      {renderRoutes(routers)}
      <ZJAppFooter/>
      <AppPlayerBar/>
    </HashRouter>
    </Provider>
  )
})
 