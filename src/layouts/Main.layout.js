import React from 'react'
import PropTypes from 'prop-types'
import config from '@config'
import { Logo, AppMenu } from '@components/ui'
import { Grid } from 'semantic-ui-react'

const Main = ({ children }) => (
  <Grid style={css.grid} padded>
    {/* Side Bar Column */}
    <Grid.Column mobile={16} tablet={5} computer={5} largeScreen={4} widescreen={3} style={css.ColumnSideBar} color={config.color}>
      <Logo name={config.name} jobTitle={config.jobTitle} img={config.myImg} />
      <AppMenu color={config.color} />
    </Grid.Column>

    {/* Content Column */}
    <Grid.Column mobile={16} tablet={11} computer={11} largeScreen={12} widescreen={13} style={css.ColumnContent}>
      {children}
    </Grid.Column>
  </Grid>
)

let css = {
  grid: {},
  ColumnSideBar: {
    padding: '0'
  },
  ColumnContent: {
    height: '100vh',
    backgroundColor: '#f2f2f2',
    overflow: 'auto'
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
