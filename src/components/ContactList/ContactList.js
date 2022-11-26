import { ContactList, ItemsContact,DeleteBtn } from "./ContactList.styled"


export const Contact = ({visibleContact, deleteContact}) =>{
    
    return(
        <ContactList>
          
             {visibleContact.map(({id, name, number}) =>(
                <ItemsContact 
                    key={id}>{name}: {number} <DeleteBtn type="button" onClick={()=>deleteContact(id)}>delete</DeleteBtn>
                </ItemsContact>
            ))}
            
        </ContactList>
    )
}
