import React, {Component} from 'react';
import {carsAndDrivers} from './dataBase/carsAndDrivers'
import CarsAndDriversComponents from './components/carsAndDriversComponents'
class App extends Component {
    render() {
        return (
            <div>
                {
                    carsAndDrivers.map((user, index) => {
                        let clsK = index % 2 ? 'skyblue' : 'yellow'
                        return (<CarsAndDriversComponents
                            item={user}
                            cls={clsK}
                            key={index}
                            />)
                    })
                }
            </div>
        );
    }
}

export default App;