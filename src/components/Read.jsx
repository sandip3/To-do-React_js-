import { useContext } from 'react';
import { toast } from 'react-toastify';
import { todoContext } from '../Wrapper';

const Read = () => {
  const [todos, settodos] = useContext(todoContext);

  const delete_todo = id => {
    let todo_list = todos.filter(x => x.id !== id);
    settodos(todo_list);
    toast.error('Todo Created!!');
  };

  const complete_toggle = id => {
    let todo_list = todos.map(x => {
      if (x.id === id) {
        return { ...x, iscomplete: !x.iscomplete };
      }
      return x;
    });
    settodos(todo_list);
  };

  const render_tasks = todos.map(e => {
    return (
      <li
        className={`font-semibold text-3xl p-4 flex justify-between content-center border-b-2 rounded
          ${e.iscomplete ? 'text-green-300' : 'text-red-400'}
          `}
        key={e.id}>
        <span className='text-4xl'>{e.task}</span>
        <span className='flex gap-3'>
          <span
            className='border rounded-2xl p-2 hover:text-indigo-900 hover:bg-cyan-300'
            onClick={() => {
              delete_todo(e.id);
            }}>
            Delete
          </span>

          <span
            className='border rounded-2xl  p-2 hover:bg-green-300 hover:text-green-800'
            onClick={() => {
              complete_toggle(e.id);
            }}>
            {e.iscomplete ? 'In-Complete' : 'Complete'}
            {/* In-Complete */}
          </span>
        </span>
      </li>
    );
  });

  return (
    <div className='w-[40%] border p-8 rounded-[40px]'>
      <h2 className='text-5xl'>
        Pending <span className='text-red-500 text-6xl font-semibold'>Task</span> :{' '}
      </h2>
      <ol className='border rounded-4xl p-4 border-amber-200 min-h-[90%] mt-5 overflow-y-auto '>
        {render_tasks}
      </ol>
    </div>
  );
};

export default Read;
