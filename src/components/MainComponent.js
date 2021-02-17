import React, { Component } from 'react';
import Header from './HeaderComponent';

import { SAMPLE_CUSTOMER } from '../shared/sampleCustomer';
import { SAMPLE_EQUIPMENT } from '../shared/sampleEquipment';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }    
}

export default Main;