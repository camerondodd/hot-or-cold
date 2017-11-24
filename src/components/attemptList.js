import React from 'react';

export default function AttemptList(props){
	let attempts = props.attempts.map((attempt,index)=>(
		<li key={index}> 
			{attempt}
		</li>
	));

	return (
		<ul id="attemptList">
			{attempts}
		</ul>
	)
}