import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'

class AppMenu extends React.Component {
  render() {
    return (
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
    )
  }
}

AppMenu.propTypes = {
  color: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default AppMenu
