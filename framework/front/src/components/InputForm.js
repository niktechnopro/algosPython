import React from 'react';

const InputForm = (props) => {
	return(
		<div>
			<h1>Input Country Name Below</h1>
			<input type="text" placeholder="enter the country name" className="value" />
			<input type="submit" placeholder="Submit this Country" onClick={props.newCountry} />
		</div>
	)
} 

export default InputForm;