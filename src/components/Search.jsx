/** @format */
import { useContext } from 'react';
import { ContextTemp } from '../ContextTemp';

export default function Search() {
	const [textInput, setTextInput] = useContext(ContextTemp);

	return (
		<div className='d-flex justify-content-center'>
			<div className='input-group mb-3'>
				<form action='#'>
					<input
						type='search'
						className='form-control'
						id='floatingInput'
						value={textInput}
						onChange={(e) => {
							setTextInput(e.target.value);
						}}
						placeholder='Insira o nome da sua cidade'
						aria-label='Insira o nome da sua cidade'
						aria-describedby='button-addon'
						autoFocus={true}
					/>
				</form>

				<button className='btn btn-light' type='button' id='button-addon'>
					<i className='fa fa-search'></i>
				</button>
			</div>
		</div>
	);
}
