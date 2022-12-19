import './App.css';
import { useState } from 'react';

function App() {
	const [username, setUsername] = useState('');

	const buttonHandler = () => {
		window.location.href = `https://twitter.com/search?q=from%3A${username}%20%20"messi"%20OR%20"scaloni"%20OR%20"scaloneta"%20OR%20"di maria"%20OR%20"de paul"%20&src=typed_query&f=top`;
	};

	return (
		<div className="App">
			<header>
				<h2>Puede festear?</h2>
			</header>
			<main>
				<h3>Ingrese su username:</h3>
				<input
					placeholder="@"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button onClick={buttonHandler}>Checkear</button>
			</main>
		</div>
	);
}

export default App;
