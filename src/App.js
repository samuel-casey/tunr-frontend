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

	// const [selectedSong, setSelectedSong] = React.useState(emptySong)

	// const selectSong = (song) => {
	// 	setSelectedSong(song)
	// }

	const getSongs = () => {
		fetch(url + "/song/")
		.then(response => response.json())
		.then(data => {
			setList(data)
		})
	}
	React.useEffect(() => {
		getSongs()}, [])

	return (
		<>
			<header>
				<h1>TUNR</h1>
				<h2>FOR ALL YOUR PLAYLIST NEEDS</h2>
			</header>
			<main>
				<Playlist {...rp} list={list}/>
				<FavsList />
				<Form />
			</main>
		</>
	);
}

export default App;
