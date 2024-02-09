import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Typography() {
const linearGradient = "linear-gradient(90deg, rgb(239, 242, 247) 0%, 7.60286%, rgb(237, 240, 249) 15.2057%, 20.7513%, rgb(235, 239, 248) 26.297%, 27.6386%, rgb(235, 239, 248) 28.9803%, 38.2826%, rgb(231, 237, 249) 47.585%, 48.1216%, rgb(230, 236, 250) 48.6583%, 53.1306%, rgb(228, 236, 249) 57.6029%, 61.5385%, rgb(227, 234, 250) 65.4741%, 68.7835%, rgb(222, 234, 250) 72.093%, 75.7603%, rgb(219, 230, 248) 79.4275%, 82.8265%, rgb(216, 229, 248) 86.2254%, 87.8354%, rgb(213, 228, 249) 89.4454%, 91.8605%, rgb(210, 226, 249) 94.2755%, 95.4383%, rgb(209, 225, 248) 96.6011%, 98.3005%, rgb(208, 224, 247) 100%)";

  return (
    <>

{/*     
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Light Bootstrap Table Heading</Card.Title>
                <p className="card-category">
                  Created using Montserrat Font Family
                </p>
              </Card.Header>
              <Card.Body>
                <div className="typography-line">
                  <h1>
                    <span>Header 1</span>
                    The Life of Light Bootstrap Dashboard React
                  </h1>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Header 2</span>
                    The Life of Light Bootstrap Dashboard React
                  </h2>
                </div>
                <div className="typography-line">
                  <h3>
                    <span>Header 3</span>
                    The Life of Light Bootstrap Dashboard React
                  </h3>
                </div>
                <div className="typography-line">
                  <h4>
                    <span>Header 4</span>
                    The Life of Light Bootstrap Dashboard React
                  </h4>
                </div>
                <div className="typography-line">
                  <h5>
                    <span>Header 5</span>
                    The Life of Light Bootstrap Dashboard React
                  </h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>
                    The Life of Light Bootstrap Dashboard React
                  </h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>I will be the leader of a company that
                    ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think
                    that’s a responsibility that I have, to push possibilities,
                    to show people, this is the level that things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>Muted Text</span>
                  <p className="text-muted">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Primary Text</span>
                  <p className="text-primary">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Info Text</span>
                  <p className="text-info">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Success Text</span>
                  <p className="text-success">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Warning Text</span>
                  <p className="text-warning">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Danger Text</span>
                  <p className="text-danger">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle <br></br>
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}

      <deep-chat
      style={{ borderRadius: "8px", height: "370px", "font-size": '0.87rem', "padding-top": "10px", borderColor: "#e4e4e4", background: linearGradient }}
      messageStyles='{
        "default": {
          "shared": {
            "bubble": {
              "backgroundColor": "unset",
              "marginTop": "10px",
              "marginBottom": "10px",
              "boxShadow": "0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16)"
            }
          },
          "user": {
            "bubble": {
              "background": "linear-gradient(130deg, #2870EA 20%, #1B4AEF 77.5%)"
            }
          },
          "ai": {"bubble": {"background": "rgba(255,255,255,0.7)"}}
        }
      }'
        initialMessages='[
          {"text": "Good morning! How did you sleep?", "role": "user"},
  {"text": "I slept well, thank you.", "role": "ai"},
  {"text": "What would you like for breakfast?", "role": "user"},
  {"text": "Just some toast and coffee, please.", "role": "ai"}
        ]'
        // style={{ height: "370px", borderRadius: "8px" }}
        demo={true}
      ></deep-chat>
      <deep-chat
      style={{ borderRadius: "8px", height: "370px", "font-size": '0.87rem', "padding-top": "10px", borderColor: "#e4e4e4", background: linearGradient }}
      messageStyles='{
        "default": {
          "shared": {
            "bubble": {
              "backgroundColor": "unset",
              "marginTop": "10px",
              "marginBottom": "10px",
              "boxShadow": "0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16)"
            }
          },
          "user": {
            "bubble": {
              "background": "linear-gradient(130deg, #2870EA 20%, #1B4AEF 77.5%)"
            }
          },
          "ai": {"bubble": {"background": "rgba(255,255,255,0.7)"}}
        }
      }'
        initialMessages='[
          {"text": "Do you remember where we went for vacation last year?", "role": "user"},
  {"text": "Hmm, let me think... Oh yes! We went to the beach!", "role": "ai"},
  {"text": "Thats right It was a beautiful beach indeed ", "role": "user"},
  {"text": "I remember the clear blue water and the warm sand.", "role": "ai"}
        ]'
        // style={{ height: "370px", borderRadius: "8px" }}
        demo={true}
      ></deep-chat>
      <deep-chat
      style={{ borderRadius: "8px", height: "370px", "font-size": '0.87rem', "padding-top": "10px", borderColor: "#e4e4e4", background: linearGradient }}
      messageStyles='{
        "default": {
          "shared": {
            "bubble": {
              "backgroundColor": "unset",
              "marginTop": "10px",
              "marginBottom": "10px",
              "boxShadow": "0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16)"
            }
          },
          "user": {
            "bubble": {
              "background": "linear-gradient(130deg, #2870EA 20%, #1B4AEF 77.5%)"
            }
          },
          "ai": {"bubble": {"background": "rgba(255,255,255,0.7)"}}
        }
      }'
        initialMessages='[
          {"text": "Who is your favorite grandchild?", "role": "user"},
          {"text": "I love all my grandchildren equally.", "role": "ai"},
          {"text": "Do you remember playing with them when they were young?", "role": "user"},
          {"text": "Yes, I have fond memories of playing games with them.", "role": "ai"}
        ]'
        // style={{ height: "370px", borderRadius: "8px" }}
        demo={true}
      ></deep-chat>
      
      
    </>
  );
}

export default Typography;
