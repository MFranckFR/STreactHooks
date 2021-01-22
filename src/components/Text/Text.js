import {useState} from 'react';
import './Text.css';

const get_random = (l) => {
    return l[Math.floor(Math.random() * l.length)]
}

const shuffle = (l, nb) => {
    if (nb === undefined || nb > l.length) {
        nb = l.length;
    }
    var r = [], lr = l;
    var r_elt = '';
    for (var i = 0; i < nb; i++) {
        r_elt = get_random(lr);
        r.push(r_elt);
        lr = lr.filter((elt) => elt !== r_elt);
    }
    return r;
}

const Text = (props) => { 
    
    const {style} = props;
    const citation = `
Je lui ai loué une partie d'un terrain. Il m'a payé plus pour une nuit que ce que valait le terrain pour deux ans. Et puis je ne l'ai pas laissé utiliser ce terrain. C'est ça qu'on devrait faire! Je ne veux pas utiliser le mot 'niquer', mais je l'ai niqué.
`;
    const phrases = citation.split('.').map(p => p.trim()).filter(p=>p !== '');
    const text_old = phrases.join(".\n");
    const text_new = shuffle(phrases).join(".\n");

    // useState renvoie {etat, fctChgState}
    const [texte, setTexte] = useState(text_old);

    const handleChangeText = (event) => {
        event.preventDefault();
        setTexte(text_old === texte ? text_new : text_old);
    }

    return <>
        <blockquote style={style}><pre><code>{texte}</code></pre></blockquote>
        <button onClick={handleChangeText}>Mélanger cette phrase de Donald Trump !</button>
    </>;
}
export default Text;
