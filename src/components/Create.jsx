import { nanoid } from 'nanoid';
import { useState } from 'react';

const Create = props => {
  //   const todos = props.todos;
  const settodos = props.settodos;

  const [task, settask] = useState('');

  const add_task = e => {
    e.preventDefault();

    let temp_task = {
      id: nanoid(),
      task,
      iscomplete: false,
    };

    settodos(x => [...x, temp_task]);
    settask('');
  };

  return (
    <div className='w-[55%] border p-8 rounded-[40px] flex flex-col justify-center'>
      <h1 className='text-6xl font-medium'>
        Create <span className='text-orange-400 font-bold text-7xl'>Task</span> to Track your Goal
      </h1>

      <form onSubmit={add_task}>
        <input
          className='my-10 text-3xl p-4 outline-0 border-b-2 text-4xl  focus:border-b-4 '
          onChange={e => {
            settask(e.target.value);
          }}
          value={task}
          type='text'
          placeholder='Enter Task'
        />

        <br />

        <button className='border-2 rounded-xl p-3 text-3xl hover:bg-amber-50 hover:text-black hover:font-bold '>
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
