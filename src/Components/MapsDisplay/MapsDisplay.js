import React, { Component } from 'react';

import './MapsDisplay.css';
import mapData from '../../mapData.json';

class MapsDisplay extends Component {
    state = {

    }
    render() { 
        console.log(mapData.dictionary.maps);
        console.log(mapData.dictionary);
        let mapArray = []
        let mapDataKeys = Object.keys(mapData.dictionary.maps);
        console.log(mapDataKeys)
        mapDataKeys.forEach( key => {
            mapArray.push(mapData.dictionary.maps[key])
        })
        console.log(mapArray)
        let mapItem = mapArray.map( (item, key) => <p key={key}>{item}</p>)
        return (
            <div className='container'>
                <h1>Maps</h1>
                {mapItem}
            </div>
        );
    }
}
 
export default MapsDisplay;