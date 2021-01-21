import './App.css';
import Text from './components/Text/Text';
import CssChanger from './components/CssChanger/CssChanger';
import {useState} from 'react';


function App() {
  const [contentColor, setContentColor] = useState('grey');

  const contentStyle = {
      backgroundColor:contentColor,
      borderStyle:'dashed'
  }

  const handlerChangeColor = (event) => {
      event.preventDefault();
      setContentColor(contentColor === 'grey'? 'red' : 'grey');
  }


  return (<>
    <Text style={contentStyle}/>
    <CssChanger changeContentColor={handlerChangeColor}/>
    </>);
}

export default App;
