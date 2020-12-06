import React, {Component} from 'react';
import './carsAndDrivers.css'

class CarsAndDriversComponents extends Component {
    render() {
        let{item, cls} = this.props
        return (
            <div>
                    <ul className={cls}>
                        <li>model: {item.model}</li>
                        <li>year: {item.year}</li>
                        <li>power: {item.power}</li>
                        <li>model: {item.model}</li>
                        <li>driver:
                            <ul>
                                <li>name: {item.driver.name}</li>
                                <li>age: {item.driver.age}</li>
                                <li>sex: {item.driver.sex}</li>
                                <li>stazh: {item.driver.stazh}</li>
                            </ul>
                        </li>
                    </ul>
            </div>
        );
    }
}

export default CarsAndDriversComponents;