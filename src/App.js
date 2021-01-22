import './App.css';
import Text from './components/Text/Text';
import CssChanger from './components/CssChanger/CssChanger';
import {useState} from 'react';
//import TaskManager from './components/TaskManager/TaskManager';
import Compteur from './components/Compteur/Compteur';

function App() {
  const [contentColor, setContentColor] = useState('grey');
  const [todos, setTodos] = useState([]);

  const contentStyle = {
      backgroundColor:contentColor,
      borderStyle:'dashed'
  }

  const handlerChangeColor = (event) => {
      event.preventDefault();
      setContentColor(contentColor === 'grey'? 'red' : 'grey');
  }

//  <TaskManager todos={todos} setTodos={setTodos}/>

  return (<>
    <Text style={contentStyle}/>
    <CssChanger changeContentColor={handlerChangeColor}/>
    <hr />
   
    <ul>
        {todos.map(
            (todo, index) =>{
                return (
                <li key={todo + index}>
                    <span>{todo}</span>
                </li>);
            }
        )}
    </ul>
    <Compteur/>
    </>);
}

export default App;
