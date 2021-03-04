import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Input, Label } from 'reactstrap';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);     
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("User: " + this.username.value + " Pass: " + this.password.value + " Remember Me: " + this.rememberMe.checked);
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span>Login</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username" 
                                        innerRef={(input) => this.username = input} /> 
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password" 
                                        innerRef={(input) => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="rememberMe" 
                                            innerRef={(input) => this.rememberMe = input} />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit">Login</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
            </div>
        )
    }    
}

export default LoginModal;