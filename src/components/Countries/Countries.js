import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h1>All countries in the world</h1>
            <div className="countries">
                {
                    countries.map(country => <Country 
                        key={country.alpha2Code} 
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

// countries.map(country => <Country 
//     name={country.name} 
//     capital={country.capital} 
//     population={country.population}
// ></Country>)

export default Countries;