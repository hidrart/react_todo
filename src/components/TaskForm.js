import {useState} from 'react';

const TaskForm = ({onAdd, display}) => {
	const [person, setPerson] = useState('');
	const [title, setTitle] = useState('');
	const [status, setStatus] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!person) {
			alert('Please add Name');
			return;
		}
		onAdd({title, person, status});
		setPerson('');
		setTitle('');
		setStatus(false);
	};

	return (
		<div
			className={`${display} p-5 mt-5 -mx-5 -mb-5 bg-gray-50 rounded-b-md`}>
			<form
				action=''
				className='flex flex-col space-y-2'
				onSubmit={onSubmit}>
				<label className='w-auto font-semibold text-md'>Name</label>
				<input
					placeholder='Please input the owner of the Task'
					type='text'
					className='px-2 py-1 my-2 text-sm border rounded outline-none'
					value={person}
					onChange={(e) => setPerson(e.currentTarget.value)}
				/>
				<label className='font-semibold text-md'>Task</label>
				<textarea
					placeholder='Please input the Task'
					type='text'
					value={title}
					className='px-2 py-1 text-sm border rounded outline-none'
					onChange={(e) => setTitle(e.currentTarget.value)}
				/>
				<div className='flex justify-between pt-2'>
					<label className='font-semibold text-md'>Completion</label>
					<input
						placeholder='Please input the Task'
						id='completion'
						type='checkbox'
						checked={status}
						value={status}
						className='w-4 h-4'
						onChange={(e) => setStatus(e.currentTarget.checked)}
					/>
				</div>
				<div className='flex justify-center'>
					<input
						type='submit'
						className='px-2 py-1 text-sm font-semibold text-white bg-gray-800 rounded'
						value='Add Task'
					/>
				</div>
			</form>
		</div>
	);
};

export default TaskForm;
