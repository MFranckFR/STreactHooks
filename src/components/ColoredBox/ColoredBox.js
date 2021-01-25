import { useContext } from 'react';
import './ColoredBox.css';
import {ThemeContext} from '../../App';

const ColoredBox = () => {

    //const {darkTheme} = useContext(ThemeContext);
    const darkTheme = useContext(ThemeContext);

    const themeStyle  = {
        padding: "5 pt",
        margin:"10 pt",
        backgroundColor: darkTheme ? '#efefef' : '#ff0000',
        color: darkTheme ? '#ff0000' : '#efefef'
    }

    return <>
    <div style={themeStyle}>ColoredStyle:{themeStyle.color}</div>
    </>;
}

export default ColoredBox;