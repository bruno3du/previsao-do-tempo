/** @format */

import { useState, useEffect, useContext } from 'react';
import { weatherFetch, forecastFetch } from '../api';
import { ContextTemp } from '../ContextTemp';
import '../style.css';

export default function CardDatas(props) {
	const { textInput, setTextInput } = useContext(ContextTemp);
	const [capitalWeather, setCapitalWeather] = useState(null);
	const [findforecast, setFindForecast] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const loadCapitals = async () => {
			if (textInput) {
				const weather = await weatherFetch(textInput);
				const forecast = await forecastFetch(textInput);
				if (forecast.cod !== '404' || weather.cod !== '404') {
					setCapitalWeather(weather);
					const filtredForecast = forecast.list.filter(
						(item, i) => i % 7 === 0 && i !== 0
					);

					const dateForecast = filtredForecast.map((item) => {
						let dayofWeek = '';
						let date = new Date(item.dt_txt);
						let dayinNumber = date.getDay();

						if (dayinNumber === 0) {
							dayofWeek = 'Domingo';
						} else if (dayinNumber === 1) {
							dayofWeek = 'Segunda';
						} else if (dayinNumber === 2) {
							dayofWeek = 'Terça';
						} else if (dayinNumber === 3) {
							dayofWeek = 'Quarta';
						} else if (dayinNumber === 4) {
							dayofWeek = 'Quinta';
						} else if (dayinNumber === 5) {
							dayofWeek = 'Sexta';
						} else {
							dayofWeek = 'Sábado';
						}
						return dayofWeek;
					});
					const tempForecast = filtredForecast.map((item) => {
						return [parseInt(item.main.temp_max), parseInt(item.main.temp_min)];
					});

					setFindForecast({ dayOfWeek: dateForecast, temp: tempForecast });
				}
			} else {
				setError(true);
				setTextInput('');
			}
		};
		loadCapitals();
	}, [textInput, setTextInput]);

	return capitalWeather ? (
		<div className='cardData border container-sm bg-light p-3 mb-3 shadow-sm rounded '>
			<div className='d-flex justify-content-between'>
				<h6>
					{capitalWeather.name} - {capitalWeather.sys.country}
				</h6>
				<span onClick={() => props.closeCard()} className='btn'>
					x
				</span>
			</div>
			<div className='d-flex mt-2 mb-2 align-items-center'>
				<h2 className='me-5 display-2 '>
					<b>{capitalWeather.main.temp + '°'}</b>
				</h2>
				<h2 className='display-4'>
					<b>{capitalWeather.weather[0].description}</b>
				</h2>
			</div>
			<div className='d-flex mb-2'>
				<div>
					<span className='me-2'>
						<b> {capitalWeather.main.temp_min}°</b>
					</span>
					<span className='me-4'>
						<b>{capitalWeather.main.temp_max}°</b>
					</span>
				</div>
				<span>
					Sensação de <b>{capitalWeather.main.feels_like}°</b>
				</span>
			</div>
			<div className='d-flex'>
				<span className='me-4'>
					Vento: <b>{capitalWeather.wind.speed}km/h </b>
				</span>
				<span>
					Humidade <b> {capitalWeather.main.humidity}% </b>
				</span>
			</div>
			<hr className='bg-warning' />
			<div className='d-flex justify-content-between'>
				<div>
					<b>
						{findforecast && findforecast.dayOfWeek[0]}
						<div className='d-flex justify-content-between text-warning'>
							<span>{findforecast && findforecast.temp[0][0]}°</span>
							<span>{findforecast && findforecast.temp[0][1]}°</span>
						</div>
					</b>
				</div>
				<div>
					<b>
						{findforecast && findforecast.dayOfWeek[1]}
						<div className='d-flex justify-content-between text-warning'>
							<span>{findforecast && findforecast.temp[1][0]}°</span>
							<span>{findforecast && findforecast.temp[1][1]}°</span>
						</div>
					</b>
				</div>
				<div>
					<b>
						{findforecast && findforecast.dayOfWeek[2]}
						<div className='d-flex justify-content-between text-warning'>
							<span>{findforecast && findforecast.temp[2][0]}°</span>
							<span>{findforecast && findforecast.temp[2][1]}°</span>
						</div>
					</b>
				</div>
				<div>
					<b>
						{findforecast && findforecast.dayOfWeek[3]}
						<div className='d-flex justify-content-between text-warning'>
							<span>{findforecast && findforecast.temp[3][0]}°</span>
							<span>{findforecast && findforecast.temp[3][1]}°</span>
						</div>
					</b>
				</div>
			</div>
		</div>
	) : (
		<div className='cardData border container-sm bg-light p-3 mb-3 shadow-sm rounded '>
			{error ? 'Não Encontramos sua cidad e' : 'Carregando...'}
		</div>
	);
}
