import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderEquipmentDetails({equipment}) {
    return(
        <div>
            <Card>
                <CardImg top width="100%" src={equipment.image} />
                <CardBody>
                    <CardTitle tag="h5">{equipment.part}</CardTitle>
                    <CardSubtitle tag="h6">{equipment.description}: {equipment.condition}</CardSubtitle>
                    <CardSubtitle tag="h6">Comments</CardSubtitle>
                    <CardText>{equipment.comment}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}


const EquipmentDetails = (props) => {
    return(
        <div>
        </div>
    )
}

export default EquipmentDetails;