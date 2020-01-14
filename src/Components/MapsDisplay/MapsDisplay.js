import React, { Component } from 'react';

import './MapsDisplay.css';
import { mapData, regions } from '../../mapData.json';
import SingleMap from '../SingleMap/SingleMap';

class MapsDisplay extends Component {
    state = {
        filterBy: [false, false, false, false, false, false, false, false]
    }

    createMapComponentsArr = (mapDict) => {
        let mapDataKeys = Object.keys(mapDict);
        let mapItems = mapDataKeys.filter(this.filterMaps).map((k, key) =>
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
    regionsCheckboxes = () => {
        let checkboxes = Object.keys(regions).map((regionKey, k) =>
            <div className='filter-checkbox-container-container' key={k}>
                {regions[regionKey]}
                <input type="checkbox" checked={this.state[k]} id={`region-${k}`} name={regions[regionKey]} onChange={this.toggleFilter} />
            </div>
        )
        return <div className='filter-checkbox-container'>
            {checkboxes}
        </div>
    }
    toggleFilter = (e) => {
        // console.log(e.target.name)
        console.log(e.target.checked);
        console.log(e.target.id);
        console.log(e.target.id.slice(7));
        let filterId = e.target.id.slice(7);
        let newFilter = [...this.state.filterBy];
        newFilter[filterId]= newFilter[filterId] ? false : true;
        console.log(newFilter);
        this.setState({
            filterBy: newFilter
        })
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
                {this.regionsCheckboxes()}
                <SingleMap mapData={{ image_url: '', name: 'Name', region: 'Region', tiers: ['Tiers'] }} />
                {this.createMapComponentsArr(mapData)}
            </div>
        );
    }
}

export default MapsDisplay;