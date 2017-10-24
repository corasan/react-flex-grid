import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Column extends Component {
  static propTypes = {
    width: PropTypes.number,
    children: PropTypes.node,
  }

  static defaultProps = {
    width: 12,
    children: null,
  }

  render() {
    return (
      <div className={`column-w${this.props.width}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Column
