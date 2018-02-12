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
            {this.props.items.map((item, i) => (
              <Menu.Item key={i} name={item.title} content={item.title} icon={item.icon} to={item.link} as={Link} />
            ))}

            <Menu.Item content="عربي" as={Link} to="/ar" />
            <Menu.Item content="English" as={Link} to="/" />
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
  color: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default AppMenu
