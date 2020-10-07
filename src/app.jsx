import React from "react";
import SpaceHeader from "./component/header";
import SpaceFooter from "./component/footer";
import Main from "./component/main";
import { connect } from 'react-redux';
import { getSpaceX } from './action';
import Filter from "./component/filter";
import { Col, Row } from "reactstrap";


class App extends React.Component {
    constructor (props) {
        super(props);
        this.props.getSpaceX();
        this.state = {
            spaceXData: []
        };
    }

    componentDidMount () {
        this.setState({
            spaceXData: []
        });
    }


    onClickHandler = (event, key, filter) => {
        if (this.state.spaceXData && this.state.spaceXData.length) {
            const spaceX = this.state.spaceXData.filter((i) => i.id !== key);
            this.setState({ spaceXData: [...spaceX, { id: key, value: filter }]
            }, () => this.props.getSpaceX(this.state.spaceXData));
        } else {
            this.setState({
                spaceXData: [...this.state.spaceXData, { id: key, value: filter }]
            }, () => this.props.getSpaceX(this.state.spaceXData));
        }
    }

    render () {
        const yearArr = ["2006", "2007", "2008", "2009",
            "2010", "2011", "2012", "2013", "2014", "2015",
            "2016", "2017", "2018", "2019", "2020"];
        return (
            <div>
                <SpaceHeader />
                <Row>
                    <Col md={2} style={{ paddingRight: 0 }}>
                        <Filter yearArr={yearArr}
                            onClickHandler={this.onClickHandler}
                        />
                    </Col>
                    <Col md={10}>
                        <Main spaces={this.props.spaceXState} />
                    </Col>
                </Row>
                <SpaceFooter />
            </div>
        );
    }
}

function mapDispatchToProps (state) {
    return {
        spaceXState: state.spaceXState.spaces
    };
}

export default connect(mapDispatchToProps, {
    getSpaceX: getSpaceX.request
})(App);

