// @flow
import React from 'react';
import { EntryForm } from './entry';

export class App extends React.Component<void, void, void> {
    render() {
        return (
            <section className="welcome">
                <h1>Welcome to JS Quest (React Version)</h1>
                <p>JS Quest is a hobby application made to help in aiding developers understand
                the differences between popular javascript development stacks. Oh, it's also a game
                about slaying orcs and getting eaten by grues.</p>
                <div className="welcome__entry">
                    <EntryForm />
                </div>
            </section>
        );
    }
}
