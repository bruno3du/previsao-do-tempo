/** @format */
import { useContext, useState } from 'react';
import { ContextTemp } from '../ContextTemp';
import '../style.css';

export default function Search({ openCard }) {
	const { setTextInput } = useContext(ContextTemp);
	const [valueField, setValueField] = useState('');

	return (
		<div className='container-sm d-flex justify-content-center'>
			<div className='input-group input-group-lg mb-3 d-flex justify-content-center'>
				<input
					type='search'
					className='form-control'
					id='floatingInput'
					value={valueField}
					onChange={(e) => setValueField(e.target.value)}
					placeholder='Insira o nome da sua cidade'
					aria-label='Insira o nome da sua cidade'
					aria-describedby='button-addon'
					autoFocus={true}
				/>

				<button
					onClick={() => {
						setTextInput(valueField);
						setValueField('');
						openCard();
					}}
					className='btn btn-light'
					type='button'
					id='button-addon'>
					<i className='fa fa-search'></i>
				</button>
			</div>
		</div>
	);
}
