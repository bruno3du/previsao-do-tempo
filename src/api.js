/** @format */

const API_BASE = ' https://api.openweathermap.org/data/2.5/';

const weatherFetch = async (endpoint) => {
	const req = await fetch(
		`${API_BASE}weather?q=${endpoint}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`
	);
	const json = await req.json();
	return json;
};
export const apiWeather = {
	getApiWeather: async () => {
		return {
			item: await weatherFetch(`americana`),
		};
	},

	getCapitalsWeather: async () => {
		return {
			rioDeJaneiro: await weatherFetch(`americana`),
			saoPaulo: await weatherFetch(`sao paulo`),
			beloHorizonte: await weatherFetch(`belo horizonte`),
			brasilia: await weatherFetch(`brasilia`),
			belem: await weatherFetch(`belem`),
			salvador: await weatherFetch(`salvador`),
			curitiba: await weatherFetch(`curitiba`),
			fortaleza: await weatherFetch(`fortaleza`),
			manaus: await weatherFetch(`manaus`),
			joaoPessoa: await weatherFetch(`joão pessoa`),
		};
	},
};
