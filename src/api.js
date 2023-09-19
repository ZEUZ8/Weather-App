export const geoApiOptions = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'a8e96a89efmshc1435e061e16e4fp148869jsnd2de258343b9',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};


export const url = `https://api.openweathermap.org/data/2.5/weather?q=Kozhikode&appid=${process.env.API_KEY}`;
