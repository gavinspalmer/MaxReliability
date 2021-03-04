//Generates table of equipment from the set
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function RenderEquipmentList({equipment, onClick}) {
    return(
        <ListGroup onClick={() => onClick(equipment.id)}>
            <ListGroupItem style={{ textTransform: 'uppercase'}} tag="a" href="#">{equipment.component} - {equipment.description}</ListGroupItem>
        </ListGroup>
    );
}

const Equipment = (props) => {
    const equipmentList = props.equipment.map((equipment) => {
        return (
            <div>
                <RenderEquipmentList equipment={equipment} onClick={props.onClick} />
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