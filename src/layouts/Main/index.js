import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Menu from '@components/ui/Menu'
import Logo from '@components/ui/Logo'
import ToggleStyles from '@components/utils/ToggleStyles'
import Loading from '@components/utils/Loading'
import config from '@data/config.json'
import logo from '@images/moaath-alattas.jpg'

const Layout = ({ children, language }) => {
  return (
    <ToggleStyles
      firstStyle={() => import('@styles/style.scss')}
      secondStyle={() => import('@styles/style.rtl.scss')}
      toggle={config[language].direction === 'ltr'}
      loading={Loading}
    >
      <Helmet titleTemplate={`%s - ${config[language].title}`} defaultTitle={config[language].title}>
        <html lang={language} />
      </Helmet>
      <div style={css.grid} className="ui padded grid">
        <div
          className={`${config.color} five wide computer four wide large screen sixteen wide mobile five wide tablet three wide widescreen column`}
          style={css.ColumnSideBar}
        >
          <Logo name={config[language].title} jobTitle={config[language].description} img={logo} />
          <Menu color={config.color} items={config[language].menu} />
        </div>

        <div
          className="eleven wide computer twelve wide large screen sixteen wide mobile eleven wide tablet thirteen wide widescreen column"
          style={css.ColumnContent}
        >
          {children}
        </div>
      </div>
    </ToggleStyles>
  )
}

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  direction: PropTypes.string
}

export default Layout
