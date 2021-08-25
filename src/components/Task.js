import Button from './Button';
import {CheckIcon} from '@heroicons/react/solid';
import {XIcon} from '@heroicons/react/solid';
import {TrashIcon} from '@heroicons/react/solid';

const Task = ({task, onCompleted, onDeleted, index}) => {
	return (
		<div className='flex justify-between mb-4'>
			<div className='flex w-full space-x-4 '>
				<div>
					<div className='grid items-center justify-center w-6 h-6 bg-gray-800 rounded-full'>
						<span className='text-xs text-white'>{index}</span>
					</div>
				</div>
				<div className='flex flex-col items-start'>
					<h2 className='font-semibold text-md'>{task.title}</h2>
					<p className='text-sm text-gray-400'>
						Created By {task.person}
					</p>
				</div>
			</div>
			<div className='flex flex-row items-start justify-end w-full space-x-2'>
				<p
					className={`p-1 px-2 text-sm ${
						task.status
							? '  border-blue-500 text-blue-500'
							: '  border-red-500 text-red-500'
					} border rounded-lg`}>
					{task.status ? 'Completed' : 'In Progress'}
				</p>
				<Button
					name={
						task.status ? (
							<XIcon className='w-4 h-4 text-white'></XIcon>
						) : (
							<CheckIcon className='w-4 h-4 text-white'></CheckIcon>
						)
					}
					color={`${task.status ? 'bg-gray-400' : 'bg-green-500'}`}
					onClick={() => onCompleted(task.id)}></Button>
				<Button
					name={
						<TrashIcon className='w-4 h-4 text-white'></TrashIcon>
					}
					color={'bg-red-500'}
					onClick={() => onDeleted(task.id)}></Button>
			</div>
		</div>
	);
};

export default Task;
