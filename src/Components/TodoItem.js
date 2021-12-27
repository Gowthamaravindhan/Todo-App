import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, doneTodo } from '../redux/todoSlice';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }));
	};

	const handleDoneClick = () => {
		dispatch(doneTodo({ id }));
	};

	return (
        <Card>
            <CardContent>
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onClick={handleCheckboxClick}
					></input>
					{title}
				</span>
				<button onClick={handleDoneClick} className='btn btn-danger'>
					Done
				</button>
			</div>
		</li>
        </CardContent>
        </Card>
	);
};

export default TodoItem;