import { ContactList, ItemsContact } from "./ContactList.styled"


export const Contact = ({visibleContact}) =>{
    
    return(
        <ContactList>
             {visibleContact.map(({id, name, number}) =>(
                <ItemsContact key={id}>{name}: {number} </ItemsContact>
            ))}
            
        </ContactList>
    )
}
