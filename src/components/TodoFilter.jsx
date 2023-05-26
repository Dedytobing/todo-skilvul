import { useSelector, useDispatch } from 'react-redux';
import { filterTodo } from '../redux/Actions';

function TodoFilter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilter = (type) => {
    dispatch(filterTodo(type));
  };

  return (
    <div className="flex items-center justify-between my-4">
      <h3 className="text-lg font-semibold mr-2">
        {filter === 'SHOW_ALL' ? 'All List' : filter === 'SHOW_COMPLETED' ? 'Completed List' : filter === 'SHOW_ACTIVE' ? 'Active List' : 'No tasks'}
      </h3>
      <div>
        {filter !== 'SHOW_ACTIVE' && (
          <button onClick={() => handleFilter('SHOW_ACTIVE')} className="px-1 py-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 text-white rounded-md mr-2">SHOW ACTIVE</button>
        )}
        {filter !== 'SHOW_COMPLETED' && (
          <button onClick={() => handleFilter('SHOW_COMPLETED')} className="px-1 py-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 text-white rounded-md mr-2">SHOW COMPLETED</button>
        )}
        {filter !== 'SHOW_ALL' && (
          <button onClick={() => handleFilter('SHOW_ALL')} className="px-1 py-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 text-white rounded-md mr-2">SHOW ALL</button>
        )}
      </div>
    </div>
  );
}

export default TodoFilter;
