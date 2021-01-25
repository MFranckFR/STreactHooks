import { useEffect } from "react";

const useTitle = (title) => { 
    useEffect(()=>{
        console.log(`Titre:${title}`);
        document.title = title;

    }, [title]);
}

export default useTitle;