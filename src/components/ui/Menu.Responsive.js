import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'

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
            <Link className="item" to="/ar">
              عربي
            </Link>
            <Link className="item" to="/">
              English
            </Link>
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
