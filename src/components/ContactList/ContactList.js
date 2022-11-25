import { ContactList, ItemsContact } from "./ContactList.styled"




export const Contact = ({state}) =>{
    const {contacts} = state
    return(
        <ContactList>
            {contacts.map(({
                idUser, 
                nameUser,
                numberUser
            }) =>(
                <ItemsContact key={idUser}>{nameUser}: {numberUser} </ItemsContact>
            ))}  
        </ContactList>
    )
}