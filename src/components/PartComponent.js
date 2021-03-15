//Generates the Part Pagination and Part Details Card
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, Row, Label, Col, Form, Input, FormGroup, FormControl, FormLabel } from 'reactstrap';
import { Control, Errors, actions } from 'react-redux-form';
import PartDetails from './PartDetailsComponent';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { updatePartCondition } from '../redux/ActionCreators';
import { getByDisplayValue } from '@testing-library/react';

//Receives equipment selected
//Provides information to generate pagination (PartPaginationComponent.js)
//Tracks selected part
//Provides information to generate details card (PartDetailsComponent.js)

function RenderPart({part}) {
    return(
        <div>
            <Card>
                <CardHeader style={{ textTransform: 'uppercase'}} tag="h5">{part.part}</CardHeader>
                <CardImg object src={baseUrl + part.image}/>
                <CardBody>
                    <Form>
                        <Row className="form-group">
                            <Label htmlFor="condition" size="lg" md={12}>Wear Condition:</Label>
                            <Col md={2}>
                                <Label htmlFor="description">{part.description}: </Label>
                            </Col>
                            <Col>
                                {/*onChange={() => updatePartCondition(part.id, event.target.value)}*/}  
                                <Control.select model =".condition" name="condition" className="form-control" value={part.condition}    
                                    onChange={() => console.log("partId: " + part.id + "      equipId: " + part.equipmentId)}
                                >
                                    <option value="Negligible">Negligible</option>
                                    <option value="Light">Light</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Severe">Severe</option>
                                </Control.select>
                                {/*<Input type="select" name="condition" value={part.condition}>
                                    <option>Negligible</option>
                                    <option>Light</option>
                                    <option>Moderate</option>
                                    <option>Severe</option>
                                </Input>*/}
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
    const partList = props.parts.map((part) => {
        return (
            <div key={part.id} className="col-12">
                <RenderPart part={part} />
            </div>
        );
    });

    if (props.parts.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.parts.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.parts.errorMessage}</h4>
                </div>
            </div>
        );
    }
    else {
        return(
            <div class="container">
                <div className="row">
                    {partList}
                </div>
            </div>
        );
    }
    /*if (props.parts != null) {
        const partList = props.parts.map((part) => {
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
    }*/
    
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