import Create from './components/Create';
import Read from './components/Read';
import './main.css';

const App = () => {
  return (
    <div className='w-sereen h-screen bg-cyan-900 text-amber-50 flex p-10 gap-15'>
      <Create />
      <Read />
    </div>
  );
};

export default App;
