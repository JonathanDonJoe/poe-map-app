import React, { Component } from 'react';

import './SingleMap.css'

class SingleMap extends Component {
    state = {
        completed: false,
        awakened: false,
        tempCompleted: false
    }

    isCompleted = (e) => {
        this.setState({
            completed: e.target.checked
        })
    }
    isAwakened = (e) => {
        this.setState({
            awakened: e.target.checked
        })
    }
    isTempCompleted = (e) => {
        this.setState({
            tempCompleted: e.target.checked
        })
    }

    render() {
        // console.log(this.state)
        let mapName = this.props.mapData.name.slice(0, this.props.mapData.name.length - 4)
        // console.log(mapName)
        // const url = `http://web.poecdn.com/image/Art/2DItems/Maps/Atlas2Maps/New/${mapName.split(' ').join('')}.png?scale=1&w=1&h=1&mn=6&mt=11`

        let checkBoxes = !(this.props.mapData.name === 'Name')
            ? <div className='checkbox-container'>
                <div className='checkbox-container-container'>
                    <input type="checkbox" id="completed" name="completed" onChange={this.isCompleted} />
                </div>
                <div className='checkbox-container-container'>
                    <input type="checkbox" id="awakened" name="awakened" onChange={this.isAwakened} />
                </div>
                <div className='checkbox-container-container'>
                    <input type="checkbox" id="tempCompleted" name="tempCompleted" onChange={this.isTempCompleted} />
                </div>
            </div>
            : <div className='checkbox-container'>
                <div className='label-container'>
                    <p>Completed</p>
                </div>
                <div className='label-container'>
                    <p>Awakened</p>
                </div>
                <div className='label-container'>
                    <p>Temp</p>
                </div>

            </div>

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
                    <p>{this.props.mapData.tiers.join(', ')}</p>
                </div>
                {checkBoxes}
            </div>
        );
    }
}

export default SingleMap;