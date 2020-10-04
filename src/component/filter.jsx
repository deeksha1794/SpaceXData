import React from "react";
import { Col, Row } from "reactstrap";


export default class Filter extends React.Component {

    render() {
        return (
            <div className="filter">
                <h4>Filters</h4>
                <Row>
                    <Col xs={12}>
                        <h6>Launch Year</h6>
                        <hr />
                    </Col>
                    <Col xs={12}>
                        <Row>
                            {this.yearArrMap()}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h6>Successful Launch</h6>
                        <hr />
                    </Col>
                    <Col xs={12}>
                        <Row>
                            <Col xs={5} className={"year_button"} onClick={(e) => this.props.onClickHandler(e, "launch", true)}>
                                True
                             </Col>
                            <Col xs={5} className={"year_button"} onClick={(e) => this.props.onClickHandler(e, "launch", false)}>
                                False
                             </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h6>Successful Landing</h6>
                        <hr />
                    </Col>
                    <Col xs={12}>
                        <Row>
                            <Col xs={5} className={"year_button"} onClick={(e) => this.props.onClickHandler(e, "landing", true)}>
                                True
                             </Col>
                            <Col xs={5} className={"year_button"} onClick={(e) => this.props.onClickHandler(e, "landing", false)}>
                                False
                             </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
    yearArrMap = () => {
        return this.props.yearArr && this.props.yearArr.length &&
            this.props.yearArr.map((ele, index) =>
                <Col xs={5} key={index} className={"year_button"} onClick={(e) => this.props.onClickHandler(e, "year", ele)}>
                    {ele}
                </Col>)
    }

}
