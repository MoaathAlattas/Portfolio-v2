import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Grid } from 'semantic-ui-react'
import { Logo, Menu } from '@components/ui'
import { ToggleStyles, Loading } from '@components/utils'
import config from '@data/config.json'

const Main = ({ children, language }) => (
  <ToggleStyles
    firstStyle={() => import('../style.css')}
    secondStyle={() => import('../style.rtl.css')}
    toggle={config[language].direction === 'ltr'}
    loading={Loading}
  >
    <Helmet titleTemplate={`%s - ${config[language].title}`} defaultTitle={config[language].title} />
    <Grid style={css.grid} padded>
      {/* Side Bar Column */}
      <Grid.Column mobile={16} tablet={5} computer={5} largeScreen={4} widescreen={3} style={css.ColumnSideBar} color={config.color}>
        <Logo name={config[language].title} jobTitle={config[language].description} img={config[language].logo} />
        <Menu color={config.color} items={config[language].menu} />
      </Grid.Column>

      {/* Content Column */}
      <Grid.Column mobile={16} tablet={11} computer={11} largeScreen={12} widescreen={13} style={css.ColumnContent}>
        {children}
      </Grid.Column>
    </Grid>
  </ToggleStyles>
)

let css = {
  grid: {},
  ColumnSideBar: {
    padding: '0'
  },
  ColumnContent: {
    padding: '10px 0',
    height: '100vh',
    backgroundColor: '#f2f2f2',
    overflow: 'auto'
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  direction: PropTypes.string
}

export default Main

/*
class Main extends Component {
  state = { loading: true }
  loadCSS = language => {
    let direction = config[language].direction
    let styleFile = direction === 'ltr' ? import('../style.css') : import('../style.rtl.css')
    let bothLoaded = document.getElementById('rtl') && document.getElementById('ltr')
    let linkElement = document.getElementsByTagName('link')

    if (!bothLoaded) {
      styleFile.then().catch(() => {
        this.setState({ loading: false })
        linkElement[linkElement.length - 1].id = direction
      })
      return
    }
    document.getElementById(direction).disabled = false
    document.getElementById(direction === 'ltr' ? 'rtl' : 'ltr').disabled = true
  }

  componentDidMount() {
    this.loadCSS(this.props.language)
  }
  componentWillUpdate(props) {
    props.language !== this.props.language && this.loadCSS(props.language)
  }

  render() {
    return this.state.loading ? 'Loading...' : <Layout {...this.props}>{this.props.children}</Layout>
  }
}
*/
