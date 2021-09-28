/** @format */

import React from 'react';
import Capitals from './Capitals';
import { useEffect, useState } from 'react';
import { apiWeather } from '../api';
import '../style.css';


export default function Table() {
	const [capitalWeather, setCapitalWeather] = useState(null);

	useEffect(() => {
		const loadCapitals = async () => {
			const weather = await apiWeather.getCapitalsWeather();
			setCapitalWeather(weather);
		};
		loadCapitals();
	}, []);
	console.log(capitalWeather);

	return capitalWeather ? (
		<div className="container-sm tabela d-flex justify-content-center">
			<table className='table'>
				<thead>
					<tr>
						<th>MIN</th>
						<th>MAX</th>
					</tr>
				</thead>
				<tbody>
					<Capitals city='Rio de Janeiro' max={capitalWeather.rioDeJaneiro.main.temp_max + "°"} min={capitalWeather.rioDeJaneiro.main.temp_min + "°"} />
					<Capitals city='São Paulo' max={capitalWeather.saoPaulo.main.temp_max + "°"} min={capitalWeather.saoPaulo.main.temp_min + "°"} />
					<Capitals city='Belo Horizonte' max={capitalWeather.beloHorizonte.main.temp_max + "°"} min={capitalWeather.beloHorizonte.main.temp_min + "°"} />
					<Capitals city='Brasília'max={capitalWeather.brasilia.main.temp_max + "°"} min={capitalWeather.brasilia.main.temp_min + "°"} />
					<Capitals city='Belém' max={capitalWeather.belem.main.temp_max + "°"} min={capitalWeather.belem.main.temp_min + "°"} />
					<Capitals city='Salvador' max={capitalWeather.salvador.main.temp_max + "°"} min={capitalWeather.salvador.main.temp_min + "°"} />
					<Capitals city='Curitiba' max={capitalWeather.curitiba.main.temp_max + "°"} min={capitalWeather.curitiba.main.temp_min + "°"} />
					<Capitals city='Fortaleza' max={capitalWeather.fortaleza.main.temp_max + "°"} min={capitalWeather.fortaleza.main.temp_min + "°"} />
					<Capitals city='João Pessoa' max={capitalWeather.joaoPessoa.main.temp_max + "°"} min={capitalWeather.joaoPessoa.main.temp_min + "°"} />
				</tbody>
			</table>
		</div>
	) : (
		<h2>Aguarde enquanto carregamos o dados climáticos...</h2>
	);
}
