import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Create = props => {
  const todos = props.todos;
  const settodos = props.settodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const add_task = data => {
    data.id = nanoid();
    data.iscomplete = false;

    const temp_todo = [...todos];
    temp_todo.push(data);
    settodos(temp_todo);

    toast.success("Todo Created!!")

    reset();
  };

  console.error(errors);

  return (
    <div className='w-[55%] border p-8 rounded-[40px] flex flex-col justify-center'>
      <h1 className='text-6xl font-medium'>
        Create <span className='text-orange-400 font-bold text-7xl'>Task</span> to Track your Goal
      </h1>

      <form
        className='pt-10'
        onSubmit={handleSubmit(add_task)}>
        <input
          {...register('task', { required: 'Enter Task' })}
          className='mb-4 text-3xl p-4 outline-0 border-b-2 text-4xl  focus:border-b-4 '
          type='text'
          placeholder='Enter Task'
        />
        <br />
        {errors?.task?.message && (
        <span className='text-xl text-center font-bold text-red-500 bg-red-100 p-2 rounded'>
          {errors?.task?.message}
        </span>)
        }

        <br />

        <button className='mt-10 border-2 rounded-xl p-3 text-3xl hover:bg-amber-50 hover:text-black hover:font-bold '>
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
