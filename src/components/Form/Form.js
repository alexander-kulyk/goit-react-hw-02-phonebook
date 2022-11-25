import { nanoid } from 'nanoid';
import { Button, FormContact, Input, Label } from "./Form.styled";


const idInput = nanoid();

export const Form = ({state, handelChangeInput, hanleSubmit}) =>{
    const {name} = state
    return(
        <FormContact>
            <Label htmlFor={idInput}>
              Name  
            </Label>
            <Input
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id={idInput}
                
                onChange={handelChangeInput}
                />
                <Button onClick={hanleSubmit} type="submit">Add</Button>
        </FormContact> 
    );
}