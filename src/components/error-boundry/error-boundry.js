import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
    state = {
        hasErrors: false
    };

    componentDidCatch() {
        this.setState({hasErrors: true});
    }

    render() {
        if(this.state.hasErrors) {
            return <ErrorIndicator />
        }

        return this.props.children;
    }
}