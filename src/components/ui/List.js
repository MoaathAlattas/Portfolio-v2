import React from 'react'
import PropTypes from 'prop-types'

const ListEnhanced = ({ items, type }) => {
  if (type === 1) {
    return (
      <div role="list" className="ui divided very relaxed list">
        {items.map((item, i) => (
          <div key={i} role="listitem" className="item">
            <i aria-hidden="true" className={`${item.icon} big icon`} />
            <div className="content">
              <div className="header">{item.title}</div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    )
  } else if (type === 2) {
    return (
      <div role="list" className="ui divided very relaxed list">
        {items.map((item, i) => (
          <div key={i} role="listitem" className="item">
            <div className="content">
              <div className="header">
                <i aria-hidden="true" className={`${item.icon} icon`} />
                {item.title}
              </div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    )
  } else if (type === 3) {
    return (
      <div role="list" className="ui horizontal list">
        {items.map((item, i) => (
          <div key={i} role="listitem" className="item">
            <div className="content">
              <div className="header">
                <i aria-hidden="true" className={`${item.icon} icon`} />
                {item.title}
              </div>
              <div className="ui segment">{/* <List items={item.list} /> */}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return null
}

ListEnhanced.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.number
}

ListEnhanced.defaultProps = {
  type: 1
}

export default ListEnhanced
