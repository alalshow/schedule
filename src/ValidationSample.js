import React, { Component } from 'react'
import './ValidationSample.css'

export default class ValidationSample extends Component {

  state = {
      password : '',
      clicked : false,
      validated : false
  }

  handleChange = (e) => {
    this.setState({
        password: e.target.value
    });
  }
  handleKeyPress = (e) => {
      if(e.key === 'Enter') {
          this.handleButtonClick();
      }
  }
  handleButtonClick = () => {
      this.setState({
          clicked :  true,
          validated : this.state.password === '0000'
      });
      this.input.focus();
  }
  render() {
    return (
      <div>
          <input 
            type="password" 
            ref = {(ref) => {this.input = ref}}
            onChange = {this.handleChange} 
            onKeyPress = {this.handleKeyPress}
            value={this.state.password}
            className = {this.state.clicked? (this.state.validated? 'success' : 'failure') : ''}
            >
        </input>
        <br/>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    )
  }
}
