/** @format */

import React from 'react';
import Capitals from './Capitals';
import { useEffect, useState } from 'react';
import { apiWeather } from '../api';

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
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th>MIN</th>
						<th>MAX</th>
					</tr>
				</thead>
				<tbody>
					<Capitals city='Rio de Janeiro' max={capitalWeather.rioDeJaneiro.main.temp_max + "°C"} min={capitalWeather.rioDeJaneiro.main.temp_min + "°C"} />
					<Capitals city='São Paulo' max={capitalWeather.saoPaulo.main.temp_max + "°C"} min={capitalWeather.saoPaulo.main.temp_min + "°C"} />
					<Capitals city='Belo Horizonte' max={capitalWeather.beloHorizonte.main.temp_max + "°C"} min={capitalWeather.beloHorizonte.main.temp_min + "°C"} />
					<Capitals city='Brasília'max={capitalWeather.brasilia.main.temp_max + "°C"} min={capitalWeather.brasilia.main.temp_min + "°C"} />
					<Capitals city='Belém' max={capitalWeather.belem.main.temp_max + "°C"} min={capitalWeather.belem.main.temp_min + "°C"} />
					<Capitals city='Salvador' max={capitalWeather.salvador.main.temp_max + "°C"} min={capitalWeather.salvador.main.temp_min + "°C"} />
					<Capitals city='Curitiba' max={capitalWeather.curitiba.main.temp_max + "°C"} min={capitalWeather.curitiba.main.temp_min + "°C"} />
					<Capitals city='Fortaleza' max={capitalWeather.fortaleza.main.temp_max + "°C"} min={capitalWeather.fortaleza.main.temp_min + "°C"} />
					<Capitals city='João Pessoa' max={capitalWeather.joaoPessoa.main.temp_max + "°C"} min={capitalWeather.joaoPessoa.main.temp_min + "°C"} />
				</tbody>
			</table>
		</div>
	) : (
		<h2>Aguarde enquanto carregamos o dados climáticos...</h2>
	);
}
