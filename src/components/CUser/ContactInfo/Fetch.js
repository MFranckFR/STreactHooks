import {useEffect, useState} from 'react';

const Fetch = ({ url, render }) =>{
    const [data, setData] = useState([]);

    const fetchData = async () =>{
        const resp = await fetch(url);
        const parsedResp = await resp.json();
        //console.log("Data", parsedResp);
        setData(parsedResp);
    }

    useEffect(() =>{
        fetchData();
    }, [url]);

    return render(data); // return <ContactInfo data={data} />
}
export default Fetch;
