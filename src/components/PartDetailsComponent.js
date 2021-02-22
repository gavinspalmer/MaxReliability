//The card of the selected part
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderComponentDetails({component}) {
    return(
        <div>
            <Card>
                <CardImg top width="100%" src={component.image} />
                <CardBody>
                    <CardTitle tag="h5">{component.part}</CardTitle>
                    <CardSubtitle tag="h6">{component.description}: {component.condition}</CardSubtitle>
                    <CardSubtitle tag="h6">Comments</CardSubtitle>
                    <CardText>{component.comment}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}


const PartDetails = (props) => {
    
    return(
        <div>
            <RenderComponentDetails component={props.equipment} />
        </div>
    )
}

export default PartDetails;