import './App.css';
import Text from './components/Text/Text';
import CssChanger from './components/CssChanger/CssChanger';
import React, {useState} from 'react';

//import TaskManager from './components/TaskManager/TaskManager';
import Compteur from './components/Compteur/Compteur';
import JsonPlaceHolder from './components/JsonPlaceHolder/JsonPlaceHolder';

import ColoredBox from './components/ColoredBox/ColoredBox';
export const ThemeContext = React.createContext(false);

function App() {
  const [darkTheme, setDarkTheme]= useState(true);
  const [contentColor, setContentColor] = useState('grey');
  const [todos, setTodos] = useState([]);

  const contentStyle = {
      backgroundColor:contentColor,
      borderStyle:'dashed'
  }

  const handleChangeTheme = (e) =>{
      e.preventDefault();
      console.log(`type setDarkType: ${typeof setDarkTheme}`);
      setDarkTheme(!darkTheme);
  }

  const handlerChangeColor = (event) => {
      event.preventDefault();
      setContentColor(contentColor === 'grey'? 'red' : 'grey');
  }

//  <TaskManager todos={todos} setTodos={setTodos}/>
  return (<>
    <ThemeContext.Provider value={darkTheme}>
        <button onClick={handleChangeTheme}>Change Theme</button>
        <ColoredBox />
    </ThemeContext.Provider>
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
    <JsonPlaceHolder/>
    </>);
}

export default App;
