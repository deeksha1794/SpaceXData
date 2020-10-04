import React from 'react';
import { Col, Row } from 'reactstrap';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

export default class Main extends React.Component {

    render() {
        return (
            <Row className="main">
                {this.props.spaces &&
                    this.spacesXMap()
                }
            </Row>
        )
    }

    spacesXMap = () => {
        return this.props.spaces && this.props.spaces.length && this.props.spaces.map((ele, index) =>
            (
                <Col md={3}>
                    <Card>
                        <CardImg top src={ele.links.mission_patch_small} alt="SpaceX" />
                        <CardBody>
                            <CardTitle>{ele.mission_name}</CardTitle>
                            <CardSubtitle><b>Mission id:&nbsp;</b>
                                <ul>
                                    {
                                        ele.mission_id && ele.mission_id.length &&
                                        ele.mission_id.map((ele, index) => <li key={index}>{ele}</li>)
                                    }
                                </ul>
                            </CardSubtitle>
                            <CardSubtitle>
                                <span>
                                    <span className={"ele_label"}>Launch year:&nbsp;
                                </span>
                                    <span className={"ele_data"}>{ele.launch_year}
                                    </span>
                                </span>
                            </CardSubtitle>
                            <CardSubtitle>
                                <span>
                                    <span className={"ele_label"}>Successful Launch:&nbsp;
                                </span>
                                    <span className={"ele_data"}>{ele.launch_success + ""}
                                    </span>
                                </span>
                            </CardSubtitle>
                            <CardSubtitle>
                                <span>
                                    <span className={"ele_label"}>Successful Landing:&nbsp;
                                </span>
                                    <span className={"ele_data"}>{ele.launch_landing + ""}
                                    </span>
                                </span>
                            </CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
            )
        )
    }

}