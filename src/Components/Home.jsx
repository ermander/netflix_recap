import React  from "react";
import {Container, Row, Col, Dropdown} from "react-bootstrap"
import Gallery from "./Gallery.jsx";

const Home = () =>{
    return (
        <>            
            <Container fluid className="px-4">
            <Row  className="justify-content-between">
                <Col className="d-flex">
                <h2 className="mb-4">TV Shows</h2>
                <Dropdown>
                <Dropdown.Toggle 
                variant="secondary" 
                id="dropdown-basic"
                className="btn btn-sm dropdown-toggle rounded-8 ml-3"
                style={{ backgroundColor: "#221f1f"}}
                >
                    Genres
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-dark">
                    <Dropdown.Item href="#/action-1">Commedy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Col>
                <div className="d-flex my-3 my-lg-0">
                <i className="fa fa-search icons mr-3"></i>
                <div id="kids">KIDS</div>
                <i className="fa fa-bell icons mx-3"></i>
                <i className="fa fa-user icons mx-3"></i>
            </div>
            </Row>

            <div>
                <Gallery
                    imageSrc="/assets/1.png"
                    title="This is a title"
                />
                <Gallery
                    imageSrc="/assets/2.png"
                    title="This is a title"
                />
                <Gallery
                    imageSrc="/assets/3.png"
                    title="This is a title"
                />
                <Gallery
                    imageSrc="/assets/4.png"
                    title="This is a title"
                />
                <Gallery
                    imageSrc="/assets/5.png"
                    title="This is a title"
                />
            </div>
            </Container>
        </>
    )
}

export default Home