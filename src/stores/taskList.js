'use strict'

import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher';

class TaskStore extends EventEmitter {

    constructor() {
        super();

        this.task = {
            name: 'New Task'
        }
    }

    getTask() {
        return this.task;
    }

    addNewTask=(data)=> {

        console.log('in store');
        var t = (this.task.name == 'New Task') ? 'Changed task' : 'New Task';
        this.task.name = t;
        this.emit('change');
    }

    handleActions(action){

		switch(action.type){
            case 'NEW_TASK': {
                this.addNewTask(action.data);
            }

		}

	}
}

const taskStore = new TaskStore();
dispatcher.register(taskStore.handleActions.bind(taskStore));
export default taskStore;
