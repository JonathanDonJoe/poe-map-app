import React, { Component } from 'react';

import './MapsDisplay.css';
import { mapData, regions } from '../../mapData.json';
import SingleMap from '../SingleMap/SingleMap';

class MapsDisplay extends Component {
    state = {
        showRegions: [true, true, true, true, true, true, true, true],
        showCompletion: [true, true, true]
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
            < SingleMap key={key} k={key} mapData={mapData[k]} completionFilter={this.state.showCompletion} />
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
    completionCheckboxes = () => {
        return <div className='filter-completion-container'>
            <div className='filter-completion'>
                Completed
                <input type="checkbox" checked={this.state.showCompletion[0]} id='completed-0' name='completed' onChange={this.toggleCompletionFilter} />
            </div>
            <div className='filter-completion'>
                Awakened
                <input type="checkbox" checked={this.state.showCompletion[1]} id='completed-1' name='awakened' onChange={this.toggleCompletionFilter} />
            </div>
            <div className='filter-completion'>
                Temp
                <input type="checkbox" checked={this.state.showCompletion[2]} id='completed-2' name='tempCompleted' onChange={this.toggleCompletionFilter} />
            </div>
        </div>
    }

    toggleCompletionFilter = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.checked);
        // console.log(e.target.id);
        console.log(e.target.id.slice(10));
        let filterId = e.target.id.slice(10);
        let newFilter = [...this.state.showCompletion];
        newFilter[filterId] = newFilter[filterId] ? false : true;
        // console.log(newFilter);
        this.setState({
        showCompletion: newFilter
        }
        , () => {
            console.log(this.state.showCompletion)
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
            console.log(this.state.showRegions.map((item, k) => {
                return item ? regions[k] : null
            }).filter(item => item)
            )
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
                    {this.completionCheckboxes()}
                    {this.regionsCheckboxes()}
                </div>
                <SingleMap mapData={{ image_url: '', name: 'Name', region: 'Region', tiers: ['Tiers'] }} />
                {this.createMapComponentsArr()}
            </div>
        );
    }
}

export default MapsDisplay;