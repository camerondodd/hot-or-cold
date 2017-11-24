import React from 'react';
import AttemptList from './attemptList';
import AttemptForm from './attemptForm';

export default class GameBox extends React.Component{
	constructor(props){
		super(props);
		this.state={
			attempts:[],
			feedback:'Pick a number, friendo.',
			answer:Math.floor(Math.random()*100)+1
		}
	}

	attempt(attempt){
		attempt = parseInt(attempt,10);
		if (isNaN(attempt)){
			this.setState({
				feedback:'That is not a number, pal!'
			});
			return;
		}

		let difference = Math.abs(attempt - this.state.answer);
		let feedback;
		if (difference>=50){
			feedback='You are bad at this.'
		}
		else if(difference>=25){
			feedback='Cold'
		}
		else if(difference>=15){
			feedback='Warm'
		}
		else if(difference>=7){
			feedback='Hot'
		}
		else if(difference>=1){
			feedback='Boiling'
		}
		else {
			feedback="Good Job, Bucko!"
		};

		this.setState({
			feedback:feedback,
			attempts:[...this.state.attempts,attempt]
		})
	};

	render(){
		return (
			<div>
				<h1>Hot or Cold</h1>
				<h2>{this.state.feedback}</h2>
				<AttemptForm onAttempt={(attempt)=>this.attempt(attempt)}/>
				<AttemptList attempts={this.state.attempts} />
			</div>
		)
	}
}