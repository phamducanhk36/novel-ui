import React from 'react';
import Header from "../components/Header";
import MuiSubMenu from "../components/MuiSubMenu";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Container/>
            </div>
        )
    }
}

export default Home;

