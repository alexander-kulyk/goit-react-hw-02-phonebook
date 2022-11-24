import { Button, FormContact, Input, Label } from "./Form.styled"


export const Form = ({state}) =>{
    // const {name} = state
    return(
        <FormContact>
            <Label htmlFor="111">
              Name  
            </Label>
            <Input
                // value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id="111"/>
                <Button type="submit">Add</Button>
        </FormContact> 
    );
}