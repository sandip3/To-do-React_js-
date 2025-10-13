import { useState } from 'react';
import Create from './components/Create';
import Read from './components/Read';
import './main.css';

const App = () => {
  const [todos, settodos] = useState([]);

  return (
    <div className='w-sereen h-screen bg-cyan-900 text-amber-50 flex p-10 gap-15'>
      <Create
        todos={todos}
        settodos={settodos}
      />

      <Read
        todos={todos}
        settodos={settodos}
      />
    </div>
  );
};

export default App;
