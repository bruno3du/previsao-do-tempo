/** @format */

import './style.css';
import Search from './components/Search';
import Table from './components/Table';
import ContextProvider from './ContextTemp';
import CardDatas from './components/CardDatas.jsx';
import { useState } from 'react';

function App() {
	const [show, setShow] = useState(false);


	function closeCard() {
		setShow(false)
	}

	function openCard() {
		setShow(true)
	}

	return (
		<ContextProvider>
			<section>
				<div className='mt-5 d-flex flex-column'>
					<h1 className='text-light ms-3 mb-5 d-flex justify-content-sm-center justify-content-start'>
						<b>Previsão do Tempo</b>
					</h1>
					{show && <CardDatas closeCard={closeCard} openCard={openCard}/>}
					<Search openCard={openCard} />
					<hr size='7' className='text-light' />
					<h2 className='text-light ms-3 mb-5 display-2  d-flex justify-content-sm-center justify-content-start'>
						<b>Capitais</b>
					</h2>
					<Table />
				</div>
			</section>
		</ContextProvider>
	);
}

export default App;
