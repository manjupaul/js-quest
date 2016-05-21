// @flow
import React from 'react';

export default class App extends React.Component {

    foo: number;

    constructor() {
        super();
        this.foo = 20;
    }

    render() {
        return <h1>{this.foo}</h1>;
    }
}


