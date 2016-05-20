// @flow
import React from 'react';

const yarg: Array<string> = 'foo';

export default class App extends React.Component {

    foo: number;

    constructor() {
        this.foo = 'hello';
    }

    render() {
        return <h1>{this.foo}</h1>;
    }
}

