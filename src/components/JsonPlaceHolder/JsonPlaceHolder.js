//https://jsonplaceholder.typicode.com/
//post: https://jsonplaceholder.typicode.com/posts
//comments: https://jsonplaceholder.typicode.com/comments
//users: https://jsonplaceholder.typicode.com/users

import './JsonPlaceHolder.css';
import {useState, useEffect} from "react";

const JsonPlaceHolder = (props) => {
    const [liste, setListe] = useState([]);
    const [ressource, setRessource] = useState('users');
    const url = 'https://jsonplaceholder.typicode.com';

    const getInfos = async (ressource) => {
        const response = await fetch(`${url}/${ressource}`);
        const result = await response.json();
        return result;
    }

    useEffect(()=>{
        console.log(ressource);
        // getInfos(ressource).then((result)=>{console.log(result[0]);setListe(result)});
        const saveList = async () => {
            const result = await getInfos(ressource);
            console.log(result[0]);
            setListe(result);
        }
        saveList();
    }, [ressource]);

    const handleClick = (event, target) => {
        event.preventDefault();
        setRessource(target);
    }

    return (<>
        < div style = {{backgroundColor:'lightgray',borderStyle:'dashed'}} >
        <div className="navig_post">
            <button onClick={(e)=>handleClick(e, 'posts')}>Posts</button>
            <button onClick={(e)=>handleClick(e, 'comments')}>Comments</button>
            <button onClick={(e)=>handleClick(e, 'users')}>Users</button>
        </div>
            <ul>{liste.map((elt, index) =>{
                return (
                <li key={ressource + '-' + index}>
                     <span>{JSON.stringify(elt)}</span>
                </li>);
            })}</ul>
        </div>
        </>);
}
// <span>{JSON.stringify(elt)}</span>

export default JsonPlaceHolder;

/*
liste.map((elt, index) =>{
                return (
                <li key={'elt-' + index}>
                    <span>{elt}</span>
                </li>);
            })

*/
    // const getData = async (url)=>{
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(`getData/data: type:${typeof(data)} - classe:${data.constructor.name}`);
    //     return data;
    // }

    // const getDataOf = (type) =>{
    //     const url = urls[type];
    //     console.log(`url:${url}`);
    //     const data = getData(url);
    //     console.log(`getDataOf/data: type:${typeof(data)} - classe:${data.constructor.name}`);
    //     console.log(data); 
    //     return data;
    // }

    // function getPosts(){
    //     const data = getDataOf('post');
    //     console.log(`getPosts/data: type:${typeof(data)} - classe:${data.constructor.name}`);

    //     console.log(`getPosts/liste/avantSetter: type:${typeof(liste)} - classe:${liste.constructor.name}`);
    //     setListe(data);
    //     console.log(`getPosts/liste/apresSetter: type:${typeof(liste)} - classe:${liste.constructor.name}`);
    // }
