import Task from './Task';

const Tasks = ({tasks, onCompleted, onDeleted}) => {
	return (
		<div>
			{tasks.map((task, index) => (
				<Task
					index={index + 1}
					key={task.id}
					task={task}
					onCompleted={onCompleted}
					onDeleted={onDeleted}></Task>
			))}
		</div>
	);
};

export default Tasks;
