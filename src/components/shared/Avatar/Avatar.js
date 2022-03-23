import React from 'react';
import './Avatar.css';

function Avatar({ img, text }) {
	return (
		<div className="circle">
			<img className="avatar" src={img} alt={text} />
		</div>
	);
}

export default Avatar;
