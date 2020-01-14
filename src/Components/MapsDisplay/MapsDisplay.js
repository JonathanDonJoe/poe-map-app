import React, { Component } from 'react';

import './MapsDisplay.css';
import { mapData, regions } from '../../mapData.json';
import SingleMap from '../SingleMap/SingleMap';

class MapsDisplay extends Component {
    state = {
        showRegions: [true, true, true, true, true, true, true, true]
    }

    createMapComponentsArr = () => {
        let mapDataKeys = Object.keys(mapData);
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
                <input type="checkbox" checked={this.state.showRegions[k]} id={`region-${k}`} name={regions[regionKey]} onChange={this.toggleFilter} />
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
        let newFilter = [...this.state.showRegions];
        newFilter[filterId]= newFilter[filterId] ? false : true;
        console.log(newFilter);
        this.setState({
            showRegions: newFilter
        }, () => {
            console.log(this.state.showRegions.map( (item, k) => {
                return item ? regions[k] : null
            }).filter(item=> item)
            )
        })
    }

    filteredRegions = () => {
        return this.state.showRegions.map( (item, k) => {
            return item ? regions[k] : null
        }).filter(item=> item)
    }

    filterMaps = (mapKey) => {
        // console.log(mapData[mapKey].region)
        const localRegion = mapData[mapKey].region
        const isFiltered = this.filteredRegions().includes(localRegion)
        return isFiltered
        // return mapData[mapKey].region === this.state.showRegions
    }

    render() {
        // console.log(mapData);

        return (
            <div className='container'>
                <h1>Maps</h1>
                {this.regionsCheckboxes()}
                <SingleMap mapData={{ image_url: '', name: 'Name', region: 'Region', tiers: ['Tiers'] }} />
                {this.createMapComponentsArr()}
            </div>
        );
    }
}

export default MapsDisplay;