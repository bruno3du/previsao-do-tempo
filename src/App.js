/** @format */

import './App.css';
import Search from './components/Search';
import Table from './components/Table';

function App() {
	return (
		<section>
			<div className='container mt-5 d-flex flex-column'>
				<h1 className='text-light ms-3 mb-5 display-1'>Previsão do Tempo</h1>
				<Search />
				<hr className='bg-light' />
				<h2 className='text-light ms-3 mb-5 display-1'>Capitais</h2>
				<Table />
			</div>
		</section>
	);
}

export default App;
