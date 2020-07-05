import React from 'react';

export function PrevButton(props) {
	return (
		<a href={`/meme/${props.prev}`} className="button">
			Prev
		</a>
	);
}

export function NextButton(props) {
	return (
		<a href={`/meme/${props.next}`} className="button">
			Next
		</a>
	);
}
