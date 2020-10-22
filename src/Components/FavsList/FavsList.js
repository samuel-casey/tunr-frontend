import React from 'react';

const FavsList = (props) => {
	// const { favs } = props;

	const favs = [{ artist: 'Ed Sheeran', title: 'All on Me', time: '3:18' }];

	const loaded = favs.map((fav) => (
		<div className='FavsList'>
			<article>
				<h3>{fav.artist}</h3>
				<h3>{fav.title}</h3>
				<h3>{fav.time}</h3>
			</article>
		</div>
	));

	return favs.length > 0 ? loaded : <h1>Loading...</h1>;
};

export default FavsList;
