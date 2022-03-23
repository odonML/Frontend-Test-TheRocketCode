import React from 'react';
import './InputForm.css';

function InputForm({ type = 'text', placeholder, setValue, blur }) {
	return (
		<div className="cont-input">
			<input
				className="input"
				type={type}
				placeholder={placeholder}
				onChange={(e) => setValue(e.target.value)}
				onBlur={blur}
			/>
		</div>
	);
}

export default InputForm;
