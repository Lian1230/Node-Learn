import 'bootstrap-webpack';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello,heheh</h1>
            </div>
        );
    }
}

ReactDom.render(<App />, document.body);