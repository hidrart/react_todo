import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';
import {useState} from 'react';
import {PlusCircleIcon} from '@heroicons/react/solid';
import {XCircleIcon} from '@heroicons/react/solid';
import TaskForm from './components/TaskForm';

function App() {
	const name = 'Rafli';
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: 'Homework',
			person: 'Rafli',
			status: false,
		},
		{
			id: 2,
			title: 'Cleanup',
			person: 'Rafli',
			status: false,
		},
		{
			id: 3,
			title: 'Quiz',
			person: 'Nana',
			status: false,
		},
	]);

	const [display, setDisplay] = useState(false);

	const addTask = (task) => {
		const id = tasks.length + 1;
		const newTask = {id, ...task};
		setTasks([...tasks, newTask]);
	};

	const onDeleted = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const onCompleted = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? {...task, status: !task.status} : task
			)
		);
	};

	return (
		<div className='h-screen bg-gray-200'>
			<Header></Header>
			<section className='flex flex-col h-full p-5 space-y-5 font-body'>
				<div className='w-full p-5 bg-white rounded-lg '>
					<div className='flex flex-row justify-between'>
						<div>
							<h1 className='font-semibold text-md'>
								Hello {name}
							</h1>
							<p className='text-sm text-gray-400'>
								{`You have ${
									tasks.filter(
										(task) => task.status === false
									).length
								} tasks now, make sure to complete them`}
							</p>
						</div>
						<div>
							<Button
								name={
									!display ? (
										<PlusCircleIcon className='w-4 h-4 text-white'></PlusCircleIcon>
									) : (
										<XCircleIcon className='w-4 h-4 text-white'></XCircleIcon>
									)
								}
								onClick={(e) => setDisplay(!display)}></Button>
						</div>
					</div>
					{display && <TaskForm onAdd={addTask}></TaskForm>}
				</div>
				<div
					className={`${
						tasks.length === 0 ? 'hidden' : ''
					}p-5 bg-white rounded-lg `}>
					<Tasks
						tasks={tasks}
						onCompleted={onCompleted}
						onDeleted={onDeleted}></Tasks>
				</div>
			</section>
		</div>
	);
}

export default App;
