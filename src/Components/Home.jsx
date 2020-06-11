import React, { Component } from "react";
import {Container, Row, Col, Dropdown, Alert} from "react-bootstrap"
import Gallery from "./Gallery.jsx";

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
          transformers: [],
          spiderman: [],
          matrix: [],
          loading: false,
          error: false,
      };
    }

    componentDidMount(){
        Promise.all([
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e196135d" + "&s=transformers")
        .then((response) => response.json())
        .then((responseObject) => {
        this.setState({transformers : responseObject.Search})
        }),

        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e196135d" + "&s=spiderman")
        .then((response) => response.json())
        .then((responseObject) => {
        this.setState({spiderman : responseObject.Search})
        }),

        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e196135d" + "&s=matrix")
        .then((response) => response.json())
        .then((responseObject) => {
        this.setState({matrix : responseObject.Search})
        })
    ])
    .then(() => this.setState({loading: false}))
    .catch((err) => {
        this.setState({error: true})
        console.log("An error has occurred: ", err)
    })

    console.log(this.fetchComment("tt0133093"))
}

    fetchComment = async (movieID) => {
        const commentsUrl = "https://straiveschool.herokuapp.com/api/comments/"
        const commets = await fetch(commentsUrl + movieID, {
            headers: new Headers({
                Authorization: "Basic dXNlcjg6ZUFxZDJaUGszUmJ0bThNdw==",
            }),
        })
        const response = await commentsUrl.json()
        console.log(response)
    }

    render() {


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

            {this.state.error &&  (
                <Alert variant="danger">
                An Error Has Accourred, pls try later
                </Alert>
            )}
            


            {!this.state.error &&
            <div>
                <Gallery
                title="Transformers"
                movies={this.state.transformers.slice(0, 6)}
                loading={this.state.loading}
                />
            </div>}
            <div>
                <Gallery
                title="Spider Man"
                movies={this.state.spiderman.slice(0, 6)}
                loading={this.state.loading}
                />
            </div>}
            <div>
                <Gallery
                title="Matrix"
                movies={this.state.matrix.slice(0, 6)}
                loading={this.state.loading}
                />
            </div>}
            </Container>
        </>
    )
}
}

export default Home