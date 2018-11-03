import React, { Component } from 'react';
import Button from '../Button';

class Counter extends Component {

	state = {
		count: 0
	};

	incrementCount = () => {
		this.setState({
			count: this.state.count +1,
		})
	}

	decrementCount = () => {
		this.setState({
			count: this.state.count -1,
		})
	}

	render() {
		return (
			<>
				<h1>{this.state.count}</h1>
				<Button text="Add" onClick={ this.incrementCount } />
				<Button text="Remove" onClick={ this.decrementCount } />
			</>
		);
	};
}

export default Counter;