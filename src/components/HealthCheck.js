import React from 'react';

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
            const result = await fetch(process.env.REACT_APP_NOVEL_SERVER_HOST + "/health")
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        status: json.status
                    });
                    console.log(json);
                });
            return result;
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
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <p>{status}</p>
            );
        }
    }
}

export default HealthCheck;
