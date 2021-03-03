//Generates the Part Pagination and Part Details Card
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';
import PartDetails from './PartDetailsComponent';

//Receives equipment selected
//Provides information to generate pagination (PartPaginationComponent.js)
//Tracks selected part
//Provides information to generate details card (PartDetailsComponent.js)

function RenderPart({part}) {
    return(
        <div>
            <Card>
                <CardHeader style={{ textTransform: 'uppercase'}} tag="h5">{part.part}</CardHeader>
                <CardImg object src={part.image}/>
                <CardBody>
                    <CardSubtitle tag="h6">{part.description}: {part.condition}</CardSubtitle>
                    <p></p>
                    <CardSubtitle tag="h6">Comments</CardSubtitle>
                    <CardText>{part.comment}</CardText>
                </CardBody>
            </Card>
        </div>
        
    );
}

const Parts = (props) => {
    console.log ('Made it to Parts!!')
    console.log (props.equip)
    if (props.equip != null) {
        const partList = props.equip.details.map((part) => {
            return (
                <div key={part.id} className="col-12">
                    <RenderPart part={part} />
                </div>
            )
        })
    
        return(
            <div class="container">
                <div className="row">
                    {partList}
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
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