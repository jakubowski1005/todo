import React, { Component } from 'react';
import SomeComponent from './components/learning-examples/SomeComponent';
import AnotherComponent from './components/learning-examples/AnotherComponent';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';

class App extends Component {

    render() {
        return (
            <div>
                <SomeComponent />
                <AnotherComponent />
                <AnotherComponent />
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
            </div>
        );
    }
}

export default App;
