import './CUser.css';
import {useState} from "react";

import Fetch from './ContactInfo/Fetch';
import ContactInfo from './ContactInfo/ContactInfo';


const CUser = () => {
    const [userid, setUserid] = useState(1);
    //const [data] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/users/";

    const handlePlus = (e)=>{
        e.preventDefault();
        setUserid(userid + 1);
    }

    const handleMinus = (e)=>{
        e.preventDefault();
        if(userid - 1 > 0) {
            setUserid(userid - 1)
        }
    }

    return (
        <>
        <div className="FCuser">
            <h2>UserID: {userid}</h2>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
            <Fetch url={url + userid} render={
                (data)=>{return <ContactInfo data={data}/>}
            }/>
        </div>
        </>
    );
}
export default CUser;
