import React, {Component} from 'react';

class Country extends Component {
    render() {
        // const liToRender = ;

        return (
            this.props.singleCountry.isActive
            && this.props.singleCountry.code === this.props.alpha3Code
                ? <li className={`list-group-item active`} onClick={() => this.props.mark(this.props.singleCountry.code ,false)}>
                    {this.props.name}
                </li>
                :<li className={`list-group-item`} onClick={() => this.props.mark(this.props.alpha3Code,true)}>
                    {this.props.name}
                </li>
        );

    }
}

export default Country;