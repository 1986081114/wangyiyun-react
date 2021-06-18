import React from 'react';
import { Redirect } from "react-router-dom";

import ZJDiscover from '@/pages/discover';
import ZJMine from '@/pages/mine';
import ZJFriend from '@/pages/friend';
import ZJRecommend from '@/pages/discover/pages/recommend';
import ZJSongs from '@/pages/discover/pages/songs';
import ZJRanking from '@/pages/discover/pages/ranking';
import ZJDjradio from '@/pages/discover/pages/djradio';
import ZJArtist from '@/pages/discover/pages/artist';
import ZJAlbum from '@/pages/discover/pages/album';
import ZJPlayer from "../pages/player";
const routers = [
    {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to="/discover"/>
        )
      },
    {
        path: "/discover",
        component: ZJDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                  <Redirect to="/discover/recommend"/>
                )

            },
            {
                path: "/discover/recommend",
                component: ZJRecommend
              },
              {
                path: "/discover/ranking",
                component: ZJRanking
              },
              {
                path: "/discover/songs",
                component: ZJSongs
              },
              {
                path: "/discover/djradio",
                exact: true,
                component: ZJDjradio
              },
              {
                path: "/discover/artist",
                component: ZJArtist
              },
              {
                path: "/discover/album",
                component: ZJAlbum
              },
              {
                path: "/discover/player",
                component: ZJPlayer
              },
              {
                path: "/discover/player",
                component: ZJPlayer
              }
        ]
    },
    {
        path: "/mine",
        component: ZJMine
    },
    {
        path: "/friend",
        component: ZJFriend
    }
];
export default routers