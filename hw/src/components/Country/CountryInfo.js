import React from 'react';

const CountryInfo = (props) => {
    return <div>
        <h3>{props.data.name}</h3>
        <img src={props.data.flag} alt={props.data.name} width="100"/>
        <p><b>Borders:</b></p>
        <ul className='list-group list-group-flush'>
            {
                props.borders!==null ? props.borders.map(elem =>
                    <li
                        className='list-group-item'
                        key={elem.alpha3Code}
                    >{elem.name}</li>)
                    : <li className='list-group-item'>У данной страны нет соседей</li>
            }
        </ul>
    </div>
};

export default CountryInfo;