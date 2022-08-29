import React from 'react';
import logo from "../logo.svg";

class HealthCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            status: null
        };
    }

    componentDidMount() {

        const getHealth = async () => {
            return await fetch(process.env.REACT_APP_NOVEL_SERVER_HOST + "/health")
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        status: json.status
                    });
                    console.log(json);
                });
        }

        this.timerID = setInterval(
            () => getHealth(),
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const {isLoaded, status} = this.state;
        if (status === 'OK') {
            clearInterval(this.timerID);
        }
        let health = <div>Loading...</div>;
        if (isLoaded) {
            health = <p>{status}</p>
        }
        return (
            <div className="App">
                <header className="App-header">
                    {health}
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React {this.props.text}
                    </a>
                </header>
            </div>
        )
    }
}

export default HealthCheck;
