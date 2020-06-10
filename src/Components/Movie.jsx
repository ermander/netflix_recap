import React from 'react';
import {Col, Image} from "react-bootstrap"

function Movie (props) {
    return (
        <Col className="mb-2">
            <Image fluid src={props.imageSrc} alt={props.title}></Image>
        </Col>
    )
}

export default Movie