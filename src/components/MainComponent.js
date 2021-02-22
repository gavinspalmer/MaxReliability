import React, { Component } from 'react';
import Header from './HeaderComponent';
import Equipment from './EquipmentComponent';
import Parts from './PartsComponent';

import { SAMPLE_CUSTOMER } from '../shared/sampleCustomer';
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
                <Equipment equipment={this.state.equipment} onclick={(equipmentId) => this.onEquipmentSelect(equipmentId)} />
                <Parts equipment={this.state.equipment.filter((equipment) => equipment.id === this.state.selectedEquipment)[0]} />
                {/*<EquipmentDetails equipment={this.state.equipment.filter((equipment) => equipment.id === this.state.selectedEquipment)[0]} />*/}
            </div>
        );
    }    
}

export default Main;