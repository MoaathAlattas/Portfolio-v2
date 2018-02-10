import React from 'react'
import PropTypes from 'prop-types'

const ViewTitle = ({ content }) => (
  <div style={css.container}>
    <h3>
      <span style={css.arrow}>»</span>
      {content}
    </h3>
  </div>
)

let css = {
  container: {
    padding: '5px 5px 10px 5px',
    backgroundColor: '#fff',
    border: '2px #d9d9d9 solid',
    borderWidth: '2px 0 2px 0'
  },
  arrow: {
    fontSize: '30px'
  }
}

ViewTitle.propTypes = {
  content: PropTypes.string.isRequired
}

export default ViewTitle
