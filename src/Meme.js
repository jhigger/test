import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Meme() {
	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch('https://api.imgflip.com/get_memes');

		const items = await data.json();
		setItems(items.data.memes);
	};
	return (
		<div>
			<h1>Meme Page</h1>
			{items.map((item) => (
				<p key={item.id}>
					<Link className="item-link" to={`/meme/${item.id}`}>
						{item.name}
					</Link>
				</p>
			))}
		</div>
	);
}

export default Meme;
