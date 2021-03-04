//Generates the Part Pagination and Part Details Card
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, Row, Label, Col, Form, Input, FormGroup, FormControl, FormLabel } from 'reactstrap';
import { Control, Errors, actions } from 'react-redux-form';
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
                    <Form>
                        <Row className="form-group">
                            <Label htmlFor="condition" size="lg" md={12}>Wear Condition:</Label>
                            <Col md={2}>
                                <Label htmlFor="description">{part.description}: </Label>
                            </Col>
                            <Col>  
                                <Input type="select" name="condition" value={part.condition}>
                                    <option>Negligible</option>
                                    <option>Light</option>
                                    <option>Moderate</option>
                                    <option>Severe</option>
                                </Input>
                            </Col>   
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comments" size="lg" md={12}>Comments:</Label>
                            <Col md={12}>
                                <Input type="textarea" id="comment" name="comment" 
                                    value={part.comment}
                                    rows="6"
                                    className="form-control"/>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
            <br />
            
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