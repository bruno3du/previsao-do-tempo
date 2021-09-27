/** @format */

import { useState, useEffect } from 'react';
import { apiWeather } from '../api';

export default function CardDatas() {
	const [capitalWeather, setCapitalWeather] = useState(null);

	useEffect(() => {
		const loadCapitals = async () => {
			const weather = await apiWeather.getApiWeather();
			setCapitalWeather(weather);
		};
		loadCapitals();
	}, []);
	console.log(capitalWeather);

	return (
		capitalWeather && (
			<div className='border container bg-light p-3 mb-3 shadow-sm rounded'>
				<div className='d-flex justify-content-between'>
					<h6>
						{capitalWeather.item.name} - {capitalWeather.item.sys.country}
					</h6>
					<span>X</span>
				</div>
				<div className='d-flex mt-2 mb-2 align-items-center'>
					<h2 className='me-5 display-2 '>
						<b>{capitalWeather.item.main.temp + '°'}</b>
					</h2>
					<h2 className='display-4'>
						<b>{capitalWeather.item.weather[0].description}</b>
					</h2>
				</div>
				<div className='d-flex mb-2'>
					<div>
						<span className='me-2'>
							<b> {capitalWeather.item.main.temp_min}</b>
						</span>
						<span className='me-4'>
							<b>{capitalWeather.item.main.temp_max}</b>
						</span>
					</div>
					<span>
						Sensação de <b>{capitalWeather.item.main.feels_like}°</b>
					</span>
				</div>
				<div className='d-flex'>
					<span className='me-4'>
						Vento: <b>{capitalWeather.item.wind.speed}km/h </b>
					</span>
					<span>
						Humidade <b> {capitalWeather.item.main.humidity}% </b>
					</span>
				</div>
				<hr />
				<div className='d-flex justify-content-between'>
					<div className='d-flex'>
						<b>DIA 01 </b>
						<div >
							<span>te1</span>
							<span>te1</span>
						</div>
					</div>
					<div>
						<b>DIA 02 </b>
						<span>te2</span>
						<span>te2</span>
					</div>
					<div>
						<b>DIA 03 </b>
						<span>te3</span>
						<span>te3</span>
					</div>
					<div>
						<b>DIA 04 </b>
						<span>te4</span>
						<span>te4</span>
					</div>
				</div>
			</div>
		)
	);
}

{
	/* Cidade Estado e Pais */
}
{
	/* "X" para fechar */
}
{
	/* Temperatura atual */
}
{
	/* Nublado ou nao etc,,, */
}
{
	/* Min e MAx temp */
}
{
	/* Sensação */
}
{
	/* vento */
}
{
	/* Humildade */
}
{
	/*  Previsão até 4 proximos dias */
}
