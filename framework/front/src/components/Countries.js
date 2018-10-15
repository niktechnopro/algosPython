import React from 'react';

const Countries = (props) => {
	console.log(props)
	return(
		<ul>
			<li>{props.countries}</li>
		</ul>
	)
};

export default Countries;