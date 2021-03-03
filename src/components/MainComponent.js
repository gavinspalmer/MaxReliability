import React, { Component } from 'react';
import Header from './HeaderComponent';
import Equipment from './EquipmentComponent';
import Parts from './PartComponent';
import { SAMPLE_EQUIPMENT } from '../shared/sampleEquipment';

class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            equipment: SAMPLE_EQUIPMENT,
            selectedEquipment: null
        };
    }

    onEquipmentSelect(equipmentId) {
        this.setState({selectedEquipment: equipmentId});
    }
    
    render() {
        return (
            <div>
                <Header />
                <Equipment equipment={this.state.equipment} onClick={(equipmentId) => this.onEquipmentSelect(equipmentId)} />
                <Parts equip={this.state.equipment.filter((equip) => equip.id === this.state.selectedEquipment)[0]} />
            </div>
        );
    }    
}

export default Main;