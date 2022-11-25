import { Input } from "components/Form/Form.styled"
import { ContactList, ItemsContact } from "./ContactList.styled"




export const Contact = ({state, handleFindContact}) =>{
    const {contacts, filter} = state;
    const findContact = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));
    console.log(findContact);
    
    return(
        <ContactList>
            <Input
            type="text"
            name="filter"
            value={filter}
            
            onChange = {handleFindContact}
            />
            {findContact.map(({id, name, number}) =>(
                <ItemsContact key={id}>{name}: {number} </ItemsContact>
            ))}
            
        </ContactList>
    )
}

// {contacts.map(({
//     idUser, 
//     nameUser,
//     numberUser
// }) =>(
//     <ItemsContact key={idUser}>{nameUser}: {numberUser} </ItemsContact>
// ))}  