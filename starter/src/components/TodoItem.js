import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, toogleCompleteAsync } from '../redux/todoSlice';
// import { useEffect } from 'react';
// import { getTodosAsync } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toogleCompleteAsync({id: id, completed: !completed}));
	};

	
	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id: id }));
		window.location.reload(false);
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleCompleteClick}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDeleteClick}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
