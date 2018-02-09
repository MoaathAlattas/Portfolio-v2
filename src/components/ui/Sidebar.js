import React from 'react'
import { AppMenu, Logo } from '@components/ui'

const AppSidebar = ({ open, OnToggle }) => (
  <React.Fragment>
    <Logo />
    <AppMenu />
  </React.Fragment>
)

export default AppSidebar
