import React, { useState } from 'react';
import './Chat.css';
import Avatar from './shared/Avatar/Avatar';
import Button from './shared/Button/Button';
import Card from './shared/Card/Card';
import InputForm from './shared/InputForm/InputForm';
import MessageChat from './shared/MessageChat/MessageChat';
import TitleForm from './shared/TitleForm/TitleForm';

function Chat() {
	// Nombre
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [firstLastName, setFirstLastName] = useState('');
	const [secondLastName, setSecondLastName] = useState('');
	// fecha de nacimiento
	const [day, setDay] = useState('');
	const [mounth, setMounth] = useState('');
	const [year, setYear] = useState('');
	// contacto
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	// Messages
	const [flow, setFlow] = useState(0);
	const [animation, setAnimation] = useState(false);
	const [showName, setShowName] = useState(false);
	const [showDate, setShowDate] = useState(false);
	const [showInfo, setShowInfo] = useState(false);

	// funtion animation
	const goFlow = (to) => {
		setAnimation(true);
		setTimeout(() => {
			setFlow(to);
			setAnimation(false);
		}, 200);
	};

	// funtion show mwssage chat
	const showMessageChat = (to) => {
		goFlow(to);
		if (to === 1) {
			setShowName(true);
		}
		if (to === 2) {
			setShowDate(true);
		}
		if (to === 3) {
			setShowInfo(true);
		}
	};

	// funtion send data
	const sendData = () => {
		setShowName(false);
		setShowDate(false);
		setShowInfo(false);
		goFlow(4);
	};

	return (
		<div className="container">
			<div className="user">
				<Avatar
					img="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					text="imagen del usuario"
				></Avatar>
			</div>
			<div className="chat">
				{flow === 0 ? (
					<Card ani={animation}>
						<TitleForm>Cual es tu nombre?</TitleForm>
						<InputForm placeholder="Nombre" setValue={setFirstName}></InputForm>
						<InputForm
							placeholder="Segundo Nombre"
							setValue={setSecondName}
						></InputForm>

						<InputForm
							placeholder="Apellido Paternor"
							setValue={setFirstLastName}
						></InputForm>

						<InputForm
							placeholder="Apellido Materno"
							setValue={setSecondLastName}
							blur={() => showMessageChat(1)}
						></InputForm>
					</Card>
				) : (
					''
				)}

				{showName ? (
					<MessageChat>
						<p>
							Hola: {firstName} {secondName} {firstLastName} {secondLastName}
						</p>
					</MessageChat>
				) : (
					''
				)}

				{flow === 1 ? (
					<Card ani={animation}>
						<TitleForm>Cual es tu Fecha de nacimiento?</TitleForm>
						<InputForm placeholder="Dia" setValue={setDay}></InputForm>
						<InputForm placeholder="Mes" setValue={setMounth}></InputForm>
						<InputForm
							placeholder="Año"
							setValue={setYear}
							blur={() => showMessageChat(2)}
						></InputForm>
					</Card>
				) : (
					''
				)}
				{showDate ? (
					<MessageChat>
						<p>
							Fecha: {day} {mounth} {year}
						</p>
					</MessageChat>
				) : (
					''
				)}

				{flow === 2 ? (
					<Card ani={animation}>
						<TitleForm>Datos Contacto</TitleForm>
						<InputForm placeholder="Telefono" setValue={setPhone}></InputForm>
						<InputForm
							placeholder="Correo"
							setValue={setEmail}
							blur={() => showMessageChat(3)}
						></InputForm>
					</Card>
				) : (
					''
				)}
				{showInfo ? (
					<MessageChat>
						<div className="">
							<p>Telefono: {phone}</p>
							<p> Correo: {email}</p>
						</div>
					</MessageChat>
				) : (
					''
				)}
				{flow === 3 ? <Button click={sendData}>Enviar</Button> : ''}

				{flow === 4 ? (
					<MessageChat>
						<div className="">
							<p>
								Nombre: {firstName} {secondName} {firstLastName}{' '}
								{secondLastName}
							</p>
							<p>
								Fecha: {day} {mounth} {year}
							</p>
							<p>Telefono: {phone}</p>
							<p> Correo: {email}</p>
						</div>
					</MessageChat>
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default Chat;
