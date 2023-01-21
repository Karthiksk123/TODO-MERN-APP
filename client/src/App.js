import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div >
     <Header/>
     <TodoForm/>
     <Todo/>
    </div>
  );
}

export default App;
