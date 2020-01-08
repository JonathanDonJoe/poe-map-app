import React, { Component } from 'react';

import './SingleMap.css'

class SingleMap extends Component {
    state = {

    }
    render() {
        let mapName = this.props.mapData.name.slice(0, this.props.mapData.name.length - 4)
        // console.log(mapName)
        // const url = `http://web.poecdn.com/image/Art/2DItems/Maps/Atlas2Maps/New/${mapName.split(' ').join('')}.png?scale=1&w=1&h=1&mn=6&mt=11`
        return (
            <div className='map-card'>
                <div className='map-icon'>
                    <img src={this.props.mapData.image_url} alt={mapName}></img>

                </div>
                <div className='text-name'>
                    <p>{this.props.mapData.name}</p>
                </div>
                <div className='text-region'>
                    <p>{this.props.mapData.region}</p>
                </div>
                <div className='text-tiers'>
                    <p>{this.props.mapData.tiers.join(',')}</p>
                </div>
            </div>
        );
    }
}

export default SingleMap;