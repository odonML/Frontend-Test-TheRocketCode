import React, { useState } from 'react';
import Card from './shared/Card/Card';
import InputForm from './shared/InputForm/InputForm';
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

	const [flow, setFlow] = useState(0);
	const [animation, setAnimation] = useState(false);

	const goFlow = (to) => {
		setAnimation(true);
		setTimeout(() => {
			setFlow(to);
			setAnimation(false);
		}, 200);
	};
	return (
		<div className="container">
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
					></InputForm>
				</Card>
			) : (
				''
			)}

			{flow === 1 ? (
				<Card ani={animation}>
					<TitleForm>Cual es tu Fecha de nacimiento?</TitleForm>
					<InputForm placeholder="Dia" setValue={setDay}></InputForm>
					<InputForm placeholder="Mes" setValue={setMounth}></InputForm>
					<InputForm placeholder="Año" setValue={setYear}></InputForm>
					<button onClick={() => goFlow(2)}>siguiente</button>
				</Card>
			) : (
				''
			)}

			{flow === 2 ? (
				<Card ani={animation}>
					<TitleForm>Datos Contacto</TitleForm>
					<InputForm placeholder="Telefono" setValue={setPhone}></InputForm>
					<InputForm placeholder="Correo" setValue={setEmail}></InputForm>
					<button onClick={() => goFlow(0)}>siguiente</button>
				</Card>
			) : (
				''
			)}
		</div>
	);
}

export default Chat;
