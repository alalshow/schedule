import React, { Component } from 'react'

export default class EventPractice extends Component {

  state = {
      message: '',
      username: ''
  }
  constructor(props) {
      super(props);
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleClick = () => {
    if(this.state && this.state.message && this.state.username) {
        alert( this.state.username + ":" + this.state.message);
        this.setState({
            message: '',
            username: ''
        });

    }
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        이벤트 연습
        <br></br>
        <input type="text" name="username" placeholder="유저명" onChange = {this.handleChange}/>
        <br></br>
        <input type="text" name="message" placeholder="아무거나 입력해보세요" onChange = {this.handleChange} onKeyPress={this.handleKeyPress}/>
        <br></br>
        <button onClick={this.handleClick}>내용확인</button>
      </div>
    )
  }
}
