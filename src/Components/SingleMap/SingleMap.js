import React, { Component } from 'react';

import './SingleMap.css'

class SingleMap extends Component {
    state = {

    }
    render() {
        return (
            <div className='map-card'>
                <div className='map-icon'>
                    hi
                </div>
                <div className='text-name'>
                    <p>{this.props.name}</p>
                </div>
                <div className='text-region'>
                    <p>{this.props.region}</p>
                </div>
                <div className='text-tiers'>
                    <p>{this.props.tiers.join(',')}</p>
                </div>
            </div>
        );
    }
}

export default SingleMap;