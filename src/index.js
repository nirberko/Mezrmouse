import React from 'react'
import PropTypes from 'prop-types'

export default class Mezrmouse extends React.Component {
  constructor(props) {
    super(props)

    this.node = React.createRef()

    this.distance = props.distance

    this.mousemoveEventListener = this.mousemoveEventListener.bind(this)
  }

  static propTypes = {
    distance: PropTypes.number.isRequired,
    onCloseUp: PropTypes.func,
    children: PropTypes.node.isRequired
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.mousemoveEventListener)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mousemoveEventListener)
  }

  mousemoveEventListener(e) {
    const {clientX, clientY} = e;

    const {
      x: nodeX,
      y: nodeY,
      width: nodeWidth,
      height: nodeHeight
    } = this.node.getBoundingClientRect();

    const totalPercent = Math.round(Math.sqrt(Math.pow(nodeY + (nodeHeight / 2) - clientY, 2) + Math.pow(nodeX + (nodeWidth / 2) - clientX, 2))) / this.distance

    if (totalPercent <= 1) {
      this.props.onCloseUp((totalPercent - 1) * -1)
    } else {
      this.props.onCloseUp(0)
    }
  }

  render() {
    return React.cloneElement(this.props.children, {ref: (node) => { this.node = node }})
  }
}
