import React from 'react'
import PropTypes from 'prop-types'

const SubTitle = ({ content }) => <h3>{content}</h3>

SubTitle.propTypes = {
  content: PropTypes.string.isRequired
}

export default SubTitle
