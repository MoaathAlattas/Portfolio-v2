import React from 'react'
import PropTypes from 'prop-types'

const Div = ({children}) => children

Div.propTypes ={
    children: PropTypes.node.isRequired,
}

export default Div