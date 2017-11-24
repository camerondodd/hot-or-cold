import React from 'react';

export default class AttemptForm extends React.Component{
	onAttempt(event){
		event.preventDefault();
		if (this.props.onAttempt){
			let value = this.input.value;
			this.props.onAttempt(value);
		}
		this.input.value='';
	}
	render(){
		return(
			<form onSubmit={e=>this.onAttempt(e)}>
				<label htmlFor="userGuess" id="userGuess">Enter a number</label>
				<input type="text" maxLength="3" autoComplete="off" placeholder="42" required ref={input=>this.input=input}/>
				<input type="submit" id="guessButton"  className="button" name="submit" value="Attempt" />
			</form>	
		)
	}
}