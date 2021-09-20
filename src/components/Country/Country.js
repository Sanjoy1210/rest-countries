import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const {name, capital, population, flag} = props.country;
    return (
        <div className="country">
            <h2>{name}</h2>
            <img src={flag} alt={name} />
            <p>Capital is: {capital}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;