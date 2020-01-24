import React, { Component } from 'react';

import './SingleMap.css'

class SingleMap extends Component {

    flipCompleted = (e) => {
        this.props.changeMapCompletion(this.props.k, 'completed')
        // console.log(this.props.mapCompletion)
        // this.props.saveToLocal()
    }
    
    flipAwakened = (e) => {
        this.props.changeMapCompletion(this.props.k, 'awakened')
        // console.log(this.props.mapCompletion)
        // this.props.saveToLocal()
    }
    
    flipTempCompleted = (e) => {
        this.props.changeMapCompletion(this.props.k, 'tempCompleted')
        // console.log(this.props.mapCompletion)
        // this.props.saveToLocal()
    }

    colorTier = (tier, i) => {
        // console.log(tier)
        let color = 'white'
        if (tier >= 11) {
            color = 'red'
        } else if (tier >= 6) {
            color = 'yellow'
        } else if (tier === 'Tiers') {
            color = 'black'
        }
        return <div key={i} className='tier-text-container'>{i > 0 && <p>,&nbsp;</p>}<p className={color}>{tier}</p></div>
    }

    colorImageByTier = () => {
        return this.props.mapData.image_url.slice(0, this.props.mapData.image_url.length - 2) + this.props.mapData.tiers[0]
    }

    render() {
        // console.log(this.props)
        let conditionalDisplay = ''
        if (this.props.filterByCompletion) {
            this.colorImageByTier(this.props.mapData)
            let mapName = this.props.mapData.name.slice(0, this.props.mapData.name.length - 4)

            let checkBoxes =
                (this.props.mapData.name === 'Name')
                    ?
                    <div className='checkbox-container'>
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
                    :
                    this.props.mapCompletion[this.props.k]
                        ?
                        <div className='checkbox-container'>
                            <div className='checkbox-container-container'>
                                <input type="checkbox" checked={this.props.mapCompletion[this.props.k].completed} id="completed" name="completed" onChange={this.flipCompleted} />
                            </div>
                            <div className='checkbox-container-container'>
                                <input type="checkbox" checked={this.props.mapCompletion[this.props.k].awakened} id="awakened" name="awakened" onChange={this.flipAwakened} />
                            </div>
                            <div className='checkbox-container-container'>
                                <input type="checkbox" checked={this.props.mapCompletion[this.props.k].tempCompleted} id="tempCompleted" name="tempCompleted" onChange={this.flipTempCompleted} />
                            </div>
                        </div>
                        :
                        ''


            let mapRow = <div className='map-card'>
                <div className='map-icon'>
                    <img src={this.colorImageByTier()} alt={mapName}></img>

                </div>
                <div className='text-name'>
                    <p>{this.props.mapData.name}</p>
                </div>
                <div className='text-region'>
                    <p>{this.props.mapData.region}</p>
                </div>
                <div className='text-tiers'>
                    {this.props.mapData.tiers.map(this.colorTier)}
                </div>
                {checkBoxes}
            </div>

            // console.log(this.props.filterByCompletion)

            if ((!this.props.filterByCompletion[0] || this.props.mapCompletion[this.props.k].completed) &&
                (!this.props.filterByCompletion[1] || this.props.mapCompletion[this.props.k].awakened) &&
                (!this.props.filterByCompletion[2] || this.props.mapCompletion[this.props.k].tempCompleted))
                conditionalDisplay = mapRow
        }
        return (
            conditionalDisplay
        );
    }
}

export default SingleMap;