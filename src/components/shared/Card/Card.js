import React from 'react';
import Avatar from '../Avatar/Avatar';
import CardForm from '../CardForm/CardForm';
import './Card.css';

function Card({ children, ani }) {
	return (
		<div className={`card ${ani ? 'salir' : ''}`}>
			<Avatar
				img="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				text="imagen del usuario"
			></Avatar>
			<CardForm>{children}</CardForm>
		</div>
	);
}

export default Card;
