import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Upgrade() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card>
              <div className="header text-center">
                <h4 className="title">Upgrade to PRO Alzi version.</h4>
                <p className="category">
                  Do you want access to your patient's full chat history and quick 
                  chat changes ? 
                </p>
                <br></br>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-center">Free</th>
                    <th className="text-center">PRO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Task Update (per month) </td>
                    <td>16</td>
                    <td>115+</td>
                  </tr>
        
                  <tr>
                    <td>Weekly Reports Update</td>
                    <td>4</td>
                    <td>22+</td>
                  </tr>
                  <tr>
                    <td>Voice-Assitance</td>
                    <td>
                      <i className="fas fa-times text-danger"></i>
                    </td>
                    <td>
                      <i className="fas fa-check text-success"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Chatbot Assistance</td>
                    <td>
                      <i className="fas fa-times text-danger"></i>
                    </td>
                    <td>
                      <i className="fas fa-check text-success"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Professional Support</td>
                    <td>
                      <i className="fas fa-times text-danger"></i>
                    </td>
                    <td>
                      <i className="fas fa-check text-success"></i>
                    </td>
                  </tr>
                  {/* <tr>
                    <td>Premium Support</td>
                    <td>
                      <i className="fas fa-times text-danger"></i>
                    </td>
                    <td>
                      <i className="fas fa-check text-success"></i>
                    </td>
                  </tr> */}
                  <tr>
                    <td></td>
                    <td>Free</td>
                    <td>Just $89</td>
                  </tr>
                  <tr className="last-row">
                    <td></td>
                    <td>
                      <Button
                        className="btn-round btn-fill disabled"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        variant="default"
                      >
                        Current Version
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="btn-round btn-fill"
                
                        target="_blank"
                        variant="info"
                      >
                        Upgrade to PRO
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
