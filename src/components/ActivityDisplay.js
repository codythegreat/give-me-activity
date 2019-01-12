import React, { Component } from 'react'

export class ActivityDisplay extends Component {
  render() {
    return (
      <div style={containerstyle}>
        <p>{this.props.activities.activity}</p>
      </div>
    )
  }
}

const containerstyle = {
    marginTop: '5vh',
    marginLeft: '10%',
    textAlign: 'center',
    backgroundColor: '#226',
    width: '80%',
    height: '30vh',
    padding: '5px 0',
    borderRadius: '10px',
    fontSize: '1.5rem',
}

export default ActivityDisplay
