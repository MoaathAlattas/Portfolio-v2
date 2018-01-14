import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
import Loading from '@components/utils/Loading'

const IndexView = Loadable({ loader: () => import('@views/Index.view'), loading:Loading})
const PageView = Loadable({ loader: () => import('@views/page.view'), loading:Loading})

const Routes = () =>(
<Switch>
    <Route exact path="/" component={IndexView}/>
    <Route path="/page" component={PageView}/>
</Switch>
)

export default Routes