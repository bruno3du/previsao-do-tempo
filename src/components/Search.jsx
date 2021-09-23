/** @format */

export default function Search() {
	return (
		<div className='d-flex justify-content-center'>
			<div className='input-group mb-3'>
				<input
					type='search'
					className='form-control'
					id='floatingInput'
					placeholder='Insira o nome da sua cidade'
					aria-label="Insira o nome da sua cidade"
					aria-describedby="button-addon"
					autoFocus={true}
				/>
				<button
					className='btn btn-light'
					type='button'
					id='button-addon'>
					<i className="fa fa-search"></i>
				</button>
			</div>
		</div>
	);
}
