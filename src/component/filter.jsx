import React from "react";
import { Col, Row } from "reactstrap";
import PropTypes from 'prop-types';


export default class Filter extends React.Component {
    constructor (props) {
        super(props);
    }

    yearArrMap = () => {
        return this.props.yearArr && this.props.yearArr.length &&
            this.props.yearArr.map((ele, index) => (
                <Col xs={5} key={index} className={"year_button"} tabIndex={index}
                    onClick={(e) => this.props.onClickHandler(e, "launch_year", ele)}>
                    {ele}
                </Col>));
    }

    filterTitle = (title) => {
        return (
            <Col xs={12}>
                <h6>{title}</h6>
                <hr />
            </Col>
        );
    }

    render () {
        return (
            <div className="filter">
                <h4>Filters</h4>
                <Row>
                    {this.filterTitle("Launch Year")}
                    <Col xs={12}>
                        <Row>
                            {this.yearArrMap()}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    {this.filterTitle("Successful Launch")}
                    <Col xs={12}>
                        <Row>
                            <Col xs={5} className={"year_button"} tabIndex="1"
                                onClick={(e) => this.props.onClickHandler(e, "launch_success", true)}>
                                True
                            </Col>
                            <Col xs={5} className={"year_button"} tabIndex="2"
                                onClick={(e) => this.props.onClickHandler(e, "launch_success", false)}>
                                False
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    {this.filterTitle("Successful Landing")}
                    <Col xs={12}>
                        <Row>
                            <Col xs={5} className={"year_button"} tabIndex="1"
                                onClick={(e) => this.props.onClickHandler(e, "land_success", true)}>
                                True
                            </Col>
                            <Col xs={5} className={"year_button"} tabIndex="2"
                                onClick={(e) => this.props.onClickHandler(e, "land_success", false)}>
                                False
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

Filter.propTypes = {
    yearArr: PropTypes.array,
    onClickHandler: PropTypes.func
};
