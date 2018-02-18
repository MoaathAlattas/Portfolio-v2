import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Menu from 'semantic-ui-react/dist/es/collections/Menu'
import Responsive from 'semantic-ui-react/dist/es/addons/Responsive'

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
          <button className="ui icon button" role="button" onClick={this.onToggle} style={css.menuButton}>
            <i aria-hidden="true" className="list icon" />
          </button>
        </Responsive>

        {this.state.open && (
          <div className={`ui ${this.props.color} compact fluid inverted vertical menu`}>
            {this.props.items.map((item, i) => (
              <Link className="item" key={i} to={item.link}>
                <i aria-hidden="true" className={`${item.icon} icon`} />
                {item.title}
              </Link>
            ))}

            <Menu.Item content="عربي" as={Link} to="/ar" />
            <Menu.Item content="English" as={Link} to="/" />
          </div>
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
