//Generates table of equipment from the set
import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderEquipmentList({equipment, selectEquipment}) {
    return(
        <ListGroup>
            <Button onClick={() => selectEquipment(equipment.id)} style={{ textTransform: 'uppercase'}} tag="a" href="#">{equipment.component} - {equipment.description}</Button>
        </ListGroup>
    );
}

const Equipment = (props) => {
    const equipmentList = props.equipment.equipment.map((equipment) => {
        return (
            <div>
                {/*<RenderEquipmentList equipment={equipment} onClick={props.onClick} />*/}
                <RenderEquipmentList equipment={equipment} selectEquipment={props.selectEquipment}/>
            </div>
        );
    });

    if (props.equipment.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.equipment.errorMessage) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.equipment.errorMessage}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="col-2">
                {equipmentList}
            </div>
        );
    }
}

export default Equipment;