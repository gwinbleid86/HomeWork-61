import React, {Component} from 'react';
import Country from "../Country/Country";

class Countries extends Component {
    render() {
        return (
            <div className='col-3'>
                <ul className='list-group' style={{overflow: 'auto', height: '500px'}}>
                    {this.props.countries.map(elem => <Country
                        singleCountry={this.props.singleCountry}
                        key={elem.alpha3Code}
                        alpha3Code={elem.alpha3Code}
                        name={elem.name}
                        mark={this.props.markSelectedCountry}/>)}
                </ul>
            </div>
        );
    }
}

export default Countries;