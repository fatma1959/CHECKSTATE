import React, { Component } from 'react'
import Profile from './Components/Profile/Profile'
import "./Style.css";
export class App extends Component {
    state={
      isShow:false
    }
    handleClick = (()=> {
    this.setState({isShow: !this.state.isShow})
    })
  render() {
    return (
      <div style={{marginTop:'250px',textAlign:'center'}}>
        <button className='di' onClick={this.handleClick}> {this.state.isShow ? 'Hide' : 'Show'}</button>
        {this.state.isShow ? <Profile/> : 'click again'}
      </div>
    )
  }
}

export default App


