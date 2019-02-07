import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {number: 0}
    }
        
    static defaultProps = {
        age : 28,
        name : "Frank"
    };

    onClickBtn = () => {
        this.setState({number: this.state.number + 1})
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.children}: {this.props.age}</p>
                <p>숫자: {this.state.number}</p>
                <p>
                    <button onClick={this.onClickBtn}>더하기</button>
                </p>
            </div>
        );
    }
}

MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

