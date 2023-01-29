import React, { useEffect, useState } from 'react';

const App = () => {
	const [value, setValue] = useState(0);
	const [foo, setFoo] = useState('foo');

	useEffect(() => {
		console.log('I have been mounted');
	}, []);

	useEffect(() => {
		console.log('I have been updated');
	}, [value, foo]);

	const handleClick = () => {
		setValue(value);
		setFoo('foo');
	};

	return (
		<div>
			<h1>12321</h1>
			<p>{value}</p>
			<button onClick={handleClick}>+</button>
		</div>
	);
};

export default App;
