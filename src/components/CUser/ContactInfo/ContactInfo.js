
const ContactInfo = ({data}) => {
    //console.log('ContactInfo', data);
    return (<>
        <p>Nom utilisateur:{data.username}</p>
        <p>Je m'appelle {data.name}</p>
        <p>Mon email: {data.email}</p>
    </>);
}

export default ContactInfo;



