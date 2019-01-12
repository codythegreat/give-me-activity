import React, { Component } from 'react'

export class UserInput extends Component {
  onSubmit = (e) => {
      e.preventDefault()
      this.props.generateActivity();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={inputStyling}> 
          <input value="Generate" style={buttonStyle} type="submit"/>  
        </form>
      </div>
    )
  }
}

const inputStyling = {
    textAlign: 'center',
    width: '80%',
    borderRadius: '5px',
    margin: 'auto',
    boxShadow: '0px 4px #559',
}

const buttonStyle = {
    fontSize: '2em',
    fontWeight: '900',
    padding: '5px 0',
    height: '100%',
    width: '100%',
    borderRadius: '5px',
    border: 'none',
    color: '#cb0',
    backgroundColor: '#226',
    cursor: 'pointer',
}

export default UserInput
