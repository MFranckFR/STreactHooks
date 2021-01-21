import {useState} from 'react';
import './CssChanger';

const CssChanger = (props) => {
    return <button className="CChanger" onClick={props.changeContentColor}>Colour Changer</button>;
}

export default CssChanger;