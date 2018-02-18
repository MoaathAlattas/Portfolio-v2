import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { AppContainer } from 'react-hot-loader/'
import Switch from 'react-router-dom/Switch'
import Loadable from 'react-loadable'
import Loading from '@components/utils/Loading'
import RouteEnhanced from '@components/utils/RouteEnhanced'

export { React, ReactDOM, BrowserRouter, Switch, Loadable, Loading, RouteEnhanced, AppContainer }
