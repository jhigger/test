import React, {useState, useEffect} from 'react';
import {PrevButton, NextButton} from './Buttons.js';

function ItemDetail(props) {
	const [item, setItem] = useState({});
	const [prev, setPrev] = useState();
	const [next, setNext] = useState();

	useEffect(() => {
		const fetchItem = async () => {
			const data = await fetch('https://api.imgflip.com/get_memes');

			const item = await data.json();
			const id = await props.match.params.id;
			const memes = item.data.memes;
			await memes.forEach((meme, index) => {
				if (meme.id === id) {
					if (index !== 0) setPrev(memes[index - 1].id);
					else setPrev('');
					if (index !== memes.length - 1) setNext(memes[index + 1].id);
					else setNext('');
				}
			});
			const meme = await memes.filter((meme) => {
				return meme.id === id;
			});

			setItem(meme[0]);
		};
		fetchItem();
	}, [props]);

	return (
		<div>
			<div className="buttons">
				<PrevButton className="button" prev={prev} />
				<NextButton className="button" next={next} />
			</div>
			<h1>{item.name}</h1>
			<div className="item">
				<img src={item.url} alt="" />
			</div>
		</div>
	);
}

export default ItemDetail;
