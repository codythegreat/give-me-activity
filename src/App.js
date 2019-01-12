import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import UserInput from './components/UserInput';
import ActivityDisplay from './components/ActivityDisplay';
import Axios from 'axios';


class App extends Component {
  state = {
    activities: [],
  }

  componentDidMount() {
    this.generateActivity(); 
  }

  generateActivity = () => {
    Axios.get('https://www.boredapi.com/api/activity/')
      .then(res => this.setState({ activities: res.data}))
  }
  
  render() {
    const { activities } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div style={headerStyle}><h1>Generate Activities</h1></div>
        <div style={clipStyle}>
          <div style={{zIndex: 'inherit', marginTop: '12vh'}}></div>
          <UserInput generateActivity={this.generateActivity}/>
          <ActivityDisplay activities={activities}/>
        </div>
      </div>
    );
  }
}

const clipStyle = {
  clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)',
  zIndex: '-1',
  position: 'absolute',
  top: '30vh',
  height: '70vh',
  width: '100%',
  backgroundColor: '#448'
}

const headerStyle = {
  position: 'absolute',
  top: '10vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100%',
  textAlign: 'center', 
  height: '20vh',
  zIndex: '-2',
}

export default App;
