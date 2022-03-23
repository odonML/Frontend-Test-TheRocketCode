import React from 'react';
import CardForm from '../CardForm/CardForm';
import './Card.css';

function Card({ children, ani }) {
	return (
		<div className={`card ${ani ? 'salir' : ''}`}>
			<CardForm>{children}</CardForm>
		</div>
	);
}

export default Card;
