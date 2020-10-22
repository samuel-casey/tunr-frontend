import React from 'react';
import Playlist from './Components/Playlist/Playlist';
import './App.css';

function App() {
	const songs = [
		{
			title: 'Hurricane',
			artist: 'Bob Dylan',
			time: '4:30',
		},
		{
			title: 'Galway Girl',
			artist: 'The High Kings',
			time: '3:00',
		},
	];

	return (
		<div className='App'>
			<h1>Tunr</h1>
			<img src='favicon.ico' alt='tunes' />
			<Playlist songs={songs} />
		</div>
	);
}

export default App;
