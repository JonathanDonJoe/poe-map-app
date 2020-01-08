import React, { Component } from 'react';

import './MapsDisplay.css';
import mapData from '../../mapData.json';

class MapsDisplay extends Component {
    state = {

    }
    render() {
        console.log(mapData)

        // let mapArray = []
        let mapDataKeys = Object.keys(mapData);
        // console.log(mapDataKeys)
        // mapDataKeys.forEach( key => {
        //     mapArray.push(mapData.dictionary.maps[key])
        // })
        // console.log(mapArray)
        let mapItem = mapDataKeys.map( (k, key) => 
            <div key={key}>
                <p>{mapData[k].name}</p>
                <p>{mapData[k].region}</p>
                <p>{mapData[k].tiers.join(',')}</p>
            </div>
        )
        return (
            <div className='container'>
                <h1>Maps</h1>
                {mapItem}
            </div>
        );
    }
}

export default MapsDisplay;