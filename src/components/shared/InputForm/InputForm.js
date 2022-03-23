import React from 'react';
import './InputForm.css';

function InputForm({ type = 'text', placeholder, setValue }) {
	return (
		<div className="cont-input">
			<input
				className="input"
				type={type}
				placeholder={placeholder}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}

export default InputForm;
