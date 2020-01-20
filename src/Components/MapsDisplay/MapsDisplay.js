import React, { Component } from 'react';

import './MapsDisplay.css';
import { mapData, regions } from '../../mapData.json';
import SingleMap from '../SingleMap/SingleMap';
import CompletionCheckboxes from '../CompletionCheckboxes/CompletionCheckboxes';

class MapsDisplay extends Component {
    state = {
        showRegions: [true, true, true, true, true, true, true, true],
        filterByCompletion: [false, false, false]
    }

    componentDidMount() {
        let localStorageKey = `atlasState`
        if (localStorage.getItem(localStorageKey)) {
            this.setState(JSON.parse(localStorage.getItem(localStorageKey))
            )
        }
    }

    createMapComponentsArr = () => {
        let mapDataKeys = Object.keys(mapData);
        let mapItems = mapDataKeys.filter(this.filterMaps).map((k, key) =>
            // <div key={key}>
            //     <p>{mapData[k].name}</p>
            //     <p>{mapData[k].region}</p>
            //     <p>{mapData[k].tiers.join(',')}</p>
            // </div>
            < SingleMap key={key} k={key} mapData={mapData[k]} filterByCompletion={this.state.filterByCompletion} />
        )
        // let mapArr =  mapDataKeys.map( key => mapData[k] )
        return mapItems
    }
    regionsCheckboxes = () => {
        let checkboxes = Object.keys(regions).map((regionKey, k) =>
            <div className='filter-region' key={k}>
                {regions[regionKey]}
                <input type="checkbox" checked={this.state.showRegions[k]} id={`region-${k}`} name={regions[regionKey]} onChange={this.toggleFilter} />
            </div>
        )
        return <div className='filter-region-container'>
            {checkboxes}
        </div>
    }

    toggleCompletionFilter = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.checked);
        // console.log(e.target.id);
        // console.log(e.target.id.slice(10));
        let filterId = e.target.id.slice(10);
        let newFilter = [...this.state.filterByCompletion];
        newFilter[filterId] = newFilter[filterId] ? false : true;
        // console.log(newFilter);
        this.setState({
        filterByCompletion: newFilter
        }
        , () => {
            // console.log(this.state.filterByCompletion)
            this.saveToLocal();
        })
    }

    toggleFilter = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.checked);
        // console.log(e.target.id);
        // console.log(e.target.id.slice(7));
        let filterId = e.target.id.slice(7);
        let newFilter = [...this.state.showRegions];
        newFilter[filterId] = newFilter[filterId] ? false : true;
        // console.log(newFilter);
        this.setState({
            showRegions: newFilter
        }, () => {
            // console.log(this.state.showRegions.map((item, k) => {
            //     return item ? regions[k] : null
            // }).filter(item => item)
            // )
            this.saveToLocal();
        })
    }

    filteredRegions = () => {
        return this.state.showRegions.map((item, k) => {
            return item ? regions[k] : null
        }).filter(item => item)
    }

    filterMaps = (mapKey) => {
        // console.log(mapData[mapKey].region)
        const localRegion = mapData[mapKey].region
        const isFiltered = this.filteredRegions().includes(localRegion)
        return isFiltered
        // return mapData[mapKey].region === this.state.showRegions
    }
    saveToLocal = () => {
        localStorage.setItem(`atlasState`, JSON.stringify(this.state));
    }
    render() {
        // console.log(mapData);

        return (
            <div className='container'>
                <h1>Maps</h1>
                <div className='filter-container'>
                    < CompletionCheckboxes toggleCompletionFilter={this.toggleCompletionFilter} filterByCompletion={this.state.filterByCompletion} /> 
                    {this.regionsCheckboxes()}
                </div>
                <SingleMap mapData={{ image_url: '', name: 'Name', region: 'Region', tiers: ['Tiers'] }} filterByCompletion={{filterByCompletion: [false, false, false]}} />
                {this.createMapComponentsArr()}
            </div>
        );
    }
}

export default MapsDisplay;