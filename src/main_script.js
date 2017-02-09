import React from 'react';
import ReactDom from 'react-dom';
import Task from './components/Task.component.js';


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return(
            <div>
                <div> Hello world !</div>
                <Task />
            </div>
        )
    }
}

ReactDom.render( <App />, document.getElementById('App'));
