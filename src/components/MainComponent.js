import React, { Component } from 'react';
import Header from './HeaderComponent';
import Equipment from './EquipmentComponent';
import Parts from './PartComponent';
import { Switch, Route, Redirect, withRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEquipment, fetchParts, selectEquipment } from '../redux/ActionCreators'; 
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        equipment: state.equipment,
        parts: state.parts,
        selectedEquipment: null
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchEquipment: () => {dispatch(fetchEquipment())},
    fetchParts: () => {dispatch(fetchParts())},
    selectEquipment: (selectedEquipment) => dispatch(selectEquipment(selectedEquipment))
});

class Main extends Component {
    constructor(props) {
        super(props);
        
        /*this.state = {
            equipment: SAMPLE_EQUIPMENT,
            selectedEquipment: null
        };*/
    }

    componentDidMount() {
        this.props.fetchEquipment();
        this.props.fetchParts();
    }

    onEquipmentSelect(equipmentId) {
        this.setState({selectedEquipment: equipmentId});
    }
    
    render() {

        return (
            <div>
                <Header />
                {/*onClick={(equipmentId) => this.onEquipmentSelect(equipmentId)} */}
                <Equipment equipment={this.props.equipment} 
                    selectEquipment={this.props.selectEquipment}
                />
                {/*<Parts parts={this.props.parts.parts.filter((parts) => this.props.equipment.selectedEquipment)} */}
                <Parts parts={this.props.parts.parts.filter((parts) => parts.equipmentId === this.props.equipment.selectedEquipment)}
                    isLoading={this.props.parts.isLoading}
                    errorMessage={this.props.parts.errorMessage}
                />
            </div>
        );
    }    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));