/** @format */

import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import ContextProvider from './ContextTemp';
import CardDatas from './components/CardDatas.jsx';
import { useState } from 'react';

function App() {
	const [show, setShow] = useState(true);

	return (
		<ContextProvider>
			<section>
				<div className='container mt-5 d-flex flex-column'>
					<h1 className='text-light ms-3 mb-5 display-1'><b>Previsão do Tempo</b></h1>
					{show && <CardDatas />}
					<Search />
					<hr style={{ height:"2px", backgroundColor: "#fff" }} />
					<h2 className='text-light ms-3 mb-5 display-1'><b>Capitais</b></h2>
					<Table />
				</div>
			</section>
		</ContextProvider>
	);
}

export default App;
