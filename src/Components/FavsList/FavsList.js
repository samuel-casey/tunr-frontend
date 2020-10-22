import React from 'react';
import './FavsList.css';

function FavsList(props) {
	const loaded = props.songs.map((song, index) => {
		return (
			<div className='song' key={index}>
				<div>
					<span className='song-title'>
						<b>Title:</b> {song.title}
					</span>
					<span className='song-artist'>
						<b>Artist:</b> {song.artist}
					</span>
					<span className='song-time'>
						<b>Time:</b> {song.time}
					</span>
				</div>
			</div>
		);
	});
}
const loading = 'Loading...';

return (
	<>
		<h3>My Fave List</h3>
		{props.songs.length > 0 ? loaded : loading}
	</>
);

export default FavsList;
