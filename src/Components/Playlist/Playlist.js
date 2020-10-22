import React from 'react';
import { Link } from 'react-router-dom';
import './Playlist.css';

function Playlist(props) {
	const list = [{ artist: 'Ed Sheeran', title: 'All on Me', time: '3:18' }];

	// const loaded = props.list.map((song, index) => {
	const loaded = list.map((song, index) => {
		return (
			<div className='song' key={index}>
				<div className='song-info'>
					<span className='song-title'>
						<b>Title:</b> {song.title}
					</span>
					<span className='song-artist'>
						<b>Artist:</b> {song.artist}
					</span>
					<span class='song-time'>
						<b>Time:</b> {song.time}
					</span>
				</div>
				<div className='btns'>
					<Link to='/edit'>
						<button className='btn save-song' onClick={props.handleSave}>
							{'❤️'}
						</button>
					</Link>
					<button className='btn edit-song' onCLick={props.selectSong}>
						Edit
					</button>
					<button className='btn remove-song' onClick={props.handleDelete}>
						Delete
					</button>
				</div>
			</div>
		);
	});

	const loading = 'Loading...';

	return (
		<>
			<h3>My Playlist</h3>
			{/* {props.list.length > 0 ? loaded : loading} */}
			{list.length > 0 ? loaded : loading}
		</>
	);
}

export default Playlist;
