import React from "react";
import { Col, Container, Row } from "reactstrap";


export default class SpaceFooter extends React.Component{

    render(){
        return(
            <Container className={"footer"}>
                <Row>
                    <Col xs={12}>
                    <h4>Developed by:</h4>
                    </Col>
                    <Col xs={12}>
                    <p>Deeksha khare</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
