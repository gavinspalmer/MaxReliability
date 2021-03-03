//Generates the Part Pagination and Part Details Card
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import PartDetails from './PartDetailsComponent';

//Receives equipment selected
//Provides information to generate pagination (PartPaginationComponent.js)
//Tracks selected part
//Provides information to generate details card (PartDetailsComponent.js)

function RenderPart({part}) {
    return(
        <Card>
            <CardImg width="100%" object src={part.image}/>
            <CardBody>
                <CardTitle>{part.part}</CardTitle>
                <CardText>{part.description}</CardText>
            </CardBody>
        </Card>
    );
}

const Parts = (props) => {
    console.log ('Made it to Parts!!')
    console.log (props.equip)
    if (props.equip != null) {
        const partList = props.equip.details.map((part) => {
            return (
                <div key={part.id} classname="col-12">
                    <RenderPart part={part} />
                </div>
            )
        })
    
        return(
            <div class="container">
                <div className="row">
                    {partList}
                </div>
                Test Space
            </div>
        );
    }
    else {
        return (
            <div>Nothing Selected</div>
        );
    }
    
    /*
    return (
        <div>
            <PartDetails equipment={props.equipment} />
            //returns PartPaginationComponent
        </div>
    );
    */
}

export default Parts;