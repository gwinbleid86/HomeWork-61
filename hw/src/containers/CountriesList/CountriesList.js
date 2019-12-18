import React, {Component} from 'react';
import axios from 'axios';
import Countries from "../../components/Countries/Countries";
import CountryInfo from "../../components/Country/CountryInfo";


class CountriesList extends Component {
    state = {
        countries: [],
        singleCountry: {},
        borders: []
    };

    async componentDidMount() {
        const response = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');
        this.setState({countries: response.data});
    };

    markSelectedCountry = async (code,flag) => {
        const response = await axios.get('https://restcountries.eu/rest/v2/alpha/'+code);
        if (flag === true){
            this.setState({
                singleCountry: {
                    code:code,
                    data: response.data,
                    isActive: true
                },
            });
            this.getBordersCountries();
        } else this.setState({
            singleCountry: {
                data: response.data,
                isActive: false
            },
        });
    };

    getBordersCountries = async () => {
        const borders = [...this.state.singleCountry.data.borders];
        borders.length!== 0 ? await axios.get('https://restcountries.eu/rest/v2/alpha?codes=' + borders.join(';'))
            .then(response => this.setState({borders: response.data}))
            .catch(error => console.log(error)) : this.setState({borders: null});
    };

    render() {
        return (
            <div className='row'>
                <Countries
                    singleCountry={this.state.singleCountry}
                    countries={this.state.countries}
                    changeCountry={this.changeCountry}
                    markSelectedCountry={this.markSelectedCountry}
                />
                {!this.state.singleCountry.data ? <h3>Здесь будет отображаться информация о стране</h3>
                    :<CountryInfo
                    data={this.state.singleCountry.data}
                    borders={this.state.borders}
                />}

            </div>
        );
    }
}

export default CountriesList;