import React, { Component } from 'react';
import {Form, Row, Col} from 'react-bootstrap'

class Register extends Component {
    render() {
        return (
            <>
            <Form>
                <Row>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
                </Form>                
            </>
        );
    }
}

export default Register;