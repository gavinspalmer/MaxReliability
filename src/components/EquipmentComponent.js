//Generates table of equipment from the set
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function RenderEquipmentList({equipment, onClick}) {
    return(
        <ListGroupItem tag="a" href="#">{equipment.component} - {equipment.description}</ListGroupItem>
    );
}

const Equipment = (props) => {
    const equipmentList = props.equipment.map((equipment) => {
        return (
            <div>
                <ListGroup>
                    <RenderEquipmentList equipment={equipment} onClick={props.onClick} />
                </ListGroup>
            </div>
        );
    });

    return (
        <div className="col-2">
            {equipmentList}
        </div>
    );
}

export default Equipment;