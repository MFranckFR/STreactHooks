import {useState, useEffect} from "react";
const Compteur = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("montage");
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
