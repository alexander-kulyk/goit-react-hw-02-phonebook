import { ContactList, ItemsContact } from "./ContactList.styled"




export const Contact = ({state}) =>{
    const {contacts} = state
    console.log(contacts);
    return(
        <ContactList>
            {contacts.map(({idUser, nameUser}) =>(
                <ItemsContact key={idUser}>{nameUser}</ItemsContact>
            ))}  
        </ContactList>
    )
}