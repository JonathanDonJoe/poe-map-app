import React, { Component } from 'react';

import './MapsDisplay.css';
import mapData from '../../mapData.json';
import SingleMap from '../SingleMap/SingleMap';

class MapsDisplay extends Component {
    state = {

    }
    render() {
        console.log(mapData);
        let mapDataKeys = Object.keys(mapData);
        let mapItems = mapDataKeys.map( (k, key) => 
            // <div key={key}>
            //     <p>{mapData[k].name}</p>
            //     <p>{mapData[k].region}</p>
            //     <p>{mapData[k].tiers.join(',')}</p>
            // </div>
            < SingleMap key={key} name={mapData[k].name} region={mapData[k].region} tiers={mapData[k].tiers} />
        )
        return (
            <div className='container'>
                <h1>Maps</h1>
                {mapItems}
            </div>
        );
    }
}

export default MapsDisplay;