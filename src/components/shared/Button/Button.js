import React from 'react';
import './Button.css';
function Button({ children, click }) {
	return (
		<button className="btnChat" onClick={click}>
			{children}
		</button>
	);
}

export default Button;
