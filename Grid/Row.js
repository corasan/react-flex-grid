import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Column from './Column'
import createCustomPropType from '../createCustomPropType'

const customPropType = createCustomPropType(true, Column)

class Row extends Component {
  static propTypes = {
    children: customPropType.isRequired,
    styles: PropTypes.objectOf(PropTypes.any),
  }

  static defaultProps = {
    styles: {},
  }

  render() {
    return (
      <div className="row" style={this.props.styles}>
        {this.props.children}
      </div>
    )
  }
}

export default Row
