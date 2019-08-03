import React, { Component } from 'react';
import SomeComponent from './SomeComponent';
import AnotherComponent from './AnotherComponent';

class App extends Component {

    render() {
        return (
            <div>
                <SomeComponent />
                <AnotherComponent />
                <AnotherComponent />
                <FirstComponent />
                <SecondComponent />
            </div>
        );
    }
}

const FirstComponent = () => {
    return (
        <div>
            Some conent of FIRST component.
        </div>
    );
}

function SecondComponent() {
    return <div>Some conent of SECOND component.</div>
}

export default App;
