import React from 'react'
import PropTypes from 'prop-types'

const ViewTitle = ({content}) =>(
    <h1>{content}</h1>
)

ViewTitle.propTypes = {
    content: PropTypes.string.isRequired
}

export default ViewTitle