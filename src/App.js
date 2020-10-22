import React from 'react';
import './App.css';
import {Route, Link, Switch} from "react-router-dom"
import Playlist from "./Components/Playlist/Playlist"
import FavsList	from "./Components/FavsList/FavsList"
import Form from "./Components/Form/Form"

function App() {

	const url = "http://tunr-backend.herokuapp.com"

	const [list, setList] = React.useState([])

	const emptySong = {
		artist: "",
		title: "",
		length: 0
	}

	return (
		<div className='App'>
			<h1>Tunr</h1>
			<img src='favicon.ico' alt='tunes' />
		</div>
	);
}

export default App;
