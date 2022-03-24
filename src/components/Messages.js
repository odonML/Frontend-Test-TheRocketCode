import React, { useEffect, useState } from 'react';
import { getUsers } from '../service/userServices';
import './Messages.css';
import MessageChat from './shared/MessageChat/MessageChat';
function Messages() {
	const [messages, setMessages] = useState([]);
	const getMessagesUsers = async () => {
		const { data } = await getUsers();
		setMessages(data);
		console.log(data);
	};

	useEffect(() => {
		getMessagesUsers();
	}, []);
	return (
		<div className="allMessages">
			{messages.map(
				({
					id,
					firstName,
					secondName,
					firstLastName,
					secondLastName,
					dateOfBirth,
					phone,
					email,
				}) => (
					<MessageChat key={id}>
						<div className="">
							<p>
								Nombre: {firstName} {secondName} {firstLastName}{' '}
								{secondLastName}
							</p>
							<p>Fecha: {dateOfBirth}</p>
							<p>Telefono: {phone}</p>
							<p> Correo: {email}</p>
						</div>
					</MessageChat>
				)
			)}
		</div>
	);
}

export default Messages;
