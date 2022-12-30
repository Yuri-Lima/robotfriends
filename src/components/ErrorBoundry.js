import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props); // super is used to call the constructor of the parent class
        this.state = {
        hasError: false // hasError is a boolean variable
        }
    }
    
    componentDidCatch(error, info) {
        console.log(error, info);
        this.setState({ hasError: true })
    }
    
    render() {
        if (this.state.hasError) {
        return <h1>Oooops. That is not good</h1>
        }
        return this.props.children // this.props.children is used to render the children of the component.
    }
}

export default ErrorBoundry;