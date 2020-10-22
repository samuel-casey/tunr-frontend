import React from 'react';

const FavsList = (props) => {
	const { songs } = props;

	const loaded = () => (
		<div className='FavsList'>
			{songs.map((song) => (
				<article>
					<h3>{song.artist}</h3>
					<h3>{song.title}</h3>
					<h3>{song.time}</h3>
					<button
						onClick={() => {
							props.selectSong(song);
							props.history.push('/edit');
						}}>
						Edit
					</button>
					<button
						onClick={() => {
							props.deleteSong(song);
						}}>
						Delete
					</button>
				</article>
			))}
		</div>
	);
	return songs.length > 0 ? loaded() : <h1>Loading...</h1>;
};

export default FavsList;
