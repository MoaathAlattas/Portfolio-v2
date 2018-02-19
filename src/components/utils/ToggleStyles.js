import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ToggleStyles extends Component {
  state = { loading: true }

  loadStyle = toggle => {
    let { firstStyle, secondStyle } = this.props
    let id = toggle ? 'ToggleStylesFirst' : 'ToggleStylesSecond'
    let styleFile = toggle ? firstStyle() : secondStyle()
    let bothLoaded = document.getElementById('ToggleStylesFirst') && document.getElementById('ToggleStylesSecond')
    let linkElement = document.getElementsByTagName('link')

    if (!bothLoaded) {
      styleFile
        .then(() => {
          this.setState({ loading: false })
          linkElement[linkElement.length - 1].id = id
        })
        .catch(() => {})
      return
    }
    document.getElementById(id).disabled = false
    document.getElementById(id === 'ToggleStylesFirst' ? 'ToggleStylesSecond' : 'ToggleStylesFirst').disabled = true
    this.setState({ loading: false })
  }

  componentWillMount() {
    this.loadStyle(this.props.toggle)
  }
  componentWillUpdate(props) {
    props.toggle !== this.props.toggle && this.loadStyle(props.toggle)
  }
  render() {
    let { loading: Loading } = this.props
    return this.state.loading ? <Loading /> : this.props.children
  }
}

ToggleStyles.propTypes = {
  firstStyle: PropTypes.func.isRequired,
  secondStyle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
  loading: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default ToggleStyles
