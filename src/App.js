import { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Messages from './components/Messages';
import Button from './components/shared/Button/Button';

function App() {
	const [show, setShow] = useState(0);
	return (
		<div className="App">
			<header className="App-header">
				{show === 0 ? (
					<h4>
						Hola soy Odon y esta es mi prueba tecnica
						<br />
						use en metodo onBlur en los ultimos inputs de
						<br />
						cada formulario y cambie un poco la ux.
					</h4>
				) : (
					''
				)}

				<div className="buttons">
					<Button click={() => setShow(1)}>Agregar Usuario</Button>
					<Button click={() => setShow(2)}>Ver Usuarios</Button>
				</div>

				{show === 1 ? <Chat></Chat> : ''}
				{show === 2 ? <Messages></Messages> : ''}
			</header>
		</div>
	);
}

export default App;
