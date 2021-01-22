import {useState, useEffect} from "react";
const Compteur = (props) => {
    const [count, setCount] = useState(0);

    const url = "https://swapi.dev/api/people/1";

    // version avec promise()
    const getData = () => {
    fetch(url).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then(Promise.reject.bind(Promise));
        }
    }).then((data) => console.log(data)).catch((err) => {
        console.error(err);
    });}


    // meme version avec async
    const getData2 = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => { // console.log("montage");
       getData();
       // getData2()
    }, []);

    useEffect(() => {
        console.log(count);
        return() => {
            console.log("demontage");
        };
    }, [count]);
    return (
        <>
            <h1>Vous avez cliqué: {count}
                fois</h1>
            <button onClick={
                () => setCount(count + 1)
            }>+1!</button>
        </>
    );
};
export default Compteur;

