import React, { Component } from 'react'

export default class componentName extends Component {
  state = {
      names : [ '눈', '바람', '비', '하늘' ],
      name : ''
  }

  handleChange = (e) => {
      this.setState({
          name : e.target.value
      })
  }

  handleKeyPress = (e) => {
      if(e.key ==='Enter') {
          this.handleInsert();
      }
  }

  handleInsert = () => {
      this.setState({
          names : this.state.names.concat(this.state.name),
          name : ''
      })
  }

  handleRemove = (idx) => {
    const {names} = this.state;
    this.setState({
        // names : [...names.slice(0, idx), ...names.slice(idx+1, names.length)]
        names : names.filter((val, i)=> i !== idx)
    })

  }
  render() {
    const nameList = this.state.names.map( (value, idx) => <li key={idx} onDoubleClick={()=>this.handleRemove(idx)}>{value}</li>);
    return (
      <div>
        <ul>
            {nameList}
        </ul>
        <input onChange ={this.handleChange} value={this.state.name} onKeyPress ={this.handleKeyPress}></input>
        <button onClick= {this.handleInsert}>추가</button>
      </div>
    )
  }
}
