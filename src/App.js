import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Meme from './Meme';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Switch>
					<Route
						path="/"
						exact
						component={() => {
							return <h1>Home Page</h1>;
						}}
					/>
					<Route path="/about" component={About} />
					<Route path="/meme" exact component={Meme} />
					<Route path="/meme/:id" component={ItemDetail} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
