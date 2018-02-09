import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'

import { Logo, AppMenu } from '@components/ui'
import { Grid, Segment, Sidebar } from 'semantic-ui-react'

const Main = ({ children }) => (
  <Grid style={css.grid} padded>
    <Grid.Row style={css.row}>
      {/* Side Bar Column */}
      <Grid.Column mobile={16} tablet={5} computer={5} largeScreen={4} widescreen={3} style={css.ColumnSideBar} color={config.color}>
        <Logo name={config.name} jobTitle={config.jobTitle} />
        <AppMenu color={config.color} />
      </Grid.Column>

      {/* Content Column */}
      <Grid.Column mobile={16} tablet={11} computer={11} largeScreen={12} widescreen={13} style={css.ColumnContent}>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const css = {
  grid: {
    height: '100vh'
  },
  ColumnSideBar: {
    padding: '0px'
  },
  ColumnContent: {
    backgroundColor: '#f2f2f2'
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
