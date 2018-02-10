import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu, Responsive, Button } from 'semantic-ui-react'

class AppMenu extends React.Component {
  state = {
    open: true
  }

  onScreenSizeUpdate = () => {
    let isMobile = window.innerWidth <= Responsive.onlyMobile.maxWidth
    this.setState({ open: isMobile ? false : true })
  }

  onToggle = () => this.setState(prevState => ({ open: !prevState.open }))

  render() {
    return (
      <Responsive onUpdate={this.onScreenSizeUpdate} fireOnMount as={Fragment}>
        <Responsive {...Responsive.onlyMobile} as={Fragment}>
          <Button icon="list" onClick={this.onToggle} style={css.menuButton} />
        </Responsive>

        {this.state.open && (
          <Menu vertical compact fluid color={this.props.color} inverted>
            <Menu.Item name="user" icon="user" content="About" as={Link} to="/" />
            <Menu.Item name="picture" icon="picture" content="Projects" as={Link} to="/projects" />
            <Menu.Item name="user" icon="envelope" content="Contact" as={Link} to="/contact" />
          </Menu>
        )}
      </Responsive>
    )
  }
}

let css = {
  menuButton: {
    position: 'absolute',
    top: '0',
    right: '0'
  }
}

AppMenu.propTypes = {
  color: PropTypes.string.isRequired
}

export default AppMenu
