import React from 'react';
import TaskStore from '../stores/taskList';
import * as TaksActions from '../actions/taskAction.js';

export default class Task extends React.Component{

	constructor(props){
		super(props);
		this.state = TaskStore.getTask();
	}

	componentWillMount() {
		TaskStore.on("change",this.getTask);
	}

	componentWillUnmount() {
		TaskStore.removeListener("change", this.getTask);
	}

	getTask=()=> {
		this.setState(TaskStore.getTask());
	}

	handleChange=(event)=> {
        console.log("successfull");
	}

	render(){

		return(
			<div onClick = {TaksActions.newTask}> {this.state.name} </div>
		);
	}
}
