import React, { Component } from 'react';

import './MapsDisplay.css';
import mapData from '../../mapData.json';
import SingleMap from '../SingleMap/SingleMap';

class MapsDisplay extends Component {
    state = {
        filterBy: 'Lex Ejoris'
    }

    createMapComponentsArr = (mapDict) => {
        let mapDataKeys = Object.keys(mapDict);
        let mapItems = mapDataKeys.filter(this.filterMaps).map( (k, key) => 
            // <div key={key}>
            //     <p>{mapData[k].name}</p>
            //     <p>{mapData[k].region}</p>
            //     <p>{mapData[k].tiers.join(',')}</p>
            // </div>
            < SingleMap key={key} k={key} mapData={mapData[k]} />
        )
        // let mapArr =  mapDataKeys.map( key => mapData[k] )
        return mapItems
    }

    filterMaps = (mapKey) => {
        return true;
        // return mapData[mapKey].region === this.state.filterBy
    }

    render() {
        // console.log(mapData);
        
        return (
            <div className='container'>
                <h1>Maps</h1>
                <SingleMap mapData={{image_url:'', name: 'Name', region:'Region', tiers: ['Tiers']}} />
                {this.createMapComponentsArr(mapData)}
            </div>
        );
    }
}

export default MapsDisplay;