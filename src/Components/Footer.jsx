import React from "react"
import {Row, Col, Button} from "react-bootstrap"

const Footer = () => (
    <>
    <footer>
          <Row className="text-center mt-5">
            <Col className="col-6 offset-3">
              <Row>
                <Col className="text-left mb-2">
                  <i class="fa fa-facebook footer-icon"></i>
                  <i class="fa fa-instagram footer-icon"></i>
                  <i class="fa fa-twitter footer-icon"></i>
                  <i class="fa fa-youtube footer-icon"></i>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a href="#" alt="footer link">Audio and Subtitles</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Media Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Privacy</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Contact us</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a href="#" alt="footer link">Audio Description</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Investor Relations</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Legal Notices</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a href="#" alt="footer link">Help Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Jobs</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Cookie Preferences</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a href="#" alt="footer link">Gift Cards</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Terms of Use</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Corporate Information</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="text-left mb-2">
                  <Button
                    type="button"
                    className="btn btn-sm footer-button rounded-0 mt-3"
                    variant="secondary"
                    id="footerButton"
                  >
                    Service Code
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="text-left mb-2 mt-2 copyright">
                  © 1997-2020 Netflix, Inc.
                </Col>
              </Row>
            </Col>
          </Row>
        </footer>
        </>
)

export default Footer