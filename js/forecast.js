const key = '3CkHOJVoin1yrcDCmg2UszkVmno1WV5r';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

getCity('mumbai')
    .then(data => console.log(data))
    .catch(err => console.log(err));