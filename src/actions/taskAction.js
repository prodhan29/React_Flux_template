import dispatcher from '../dispatcher/dispatcher';


export function newTask(data){

	dispatcher.dispatch({
		type: "NEW_TASK",
		data,
	});
}
