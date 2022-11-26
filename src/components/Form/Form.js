import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormContact, Input, Label } from "./Form.styled";


const idInputName = nanoid();
const idInputNamber = nanoid();

export class Form extends Component{
    state = {
        name:'',
        number:''
    }
    handelChangeInput = e =>{

        const {value, name } = e.target;
        this.setState({[name]: value });
    };

    hanleSubmit = e =>{
        e.preventDefault()
        const {name, number} = this.state
        this.props.addNewCotact(name,number) 

        this.rest()
    };
    rest = () =>{
        this.setState({name:'', number:''})
    };

    render(){
        return(
        <FormContact>
            <Label htmlFor={idInputName}>
              Name  
            </Label>
            <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required

                id={idInputName}

                value={this.state.name}
                onChange={this.handelChangeInput}
                />

                <Label htmlFor={idInputNamber}>
                    Namber  
                </Label>
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required

                    id={idInputNamber}

                    value={this.state.number}
                    onChange={this.handelChangeInput}
                    />

                <Button onClick={this.hanleSubmit} type="submit">Add</Button>
        </FormContact> 
        )
    }
}


// export const Form = ({state, handelChangeInput, hanleSubmit}) =>{
//     const {name, number} = state
//     return(
//         <FormContact>
//             <Label htmlFor={idInputName}>
//               Name  
//             </Label>
//             <Input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required

//                 id={idInputName}

//                 value={name}
//                 onChange={handelChangeInput}
//                 />

//                 <Label htmlFor={idInputNamber}>
//                     Namber  
//                 </Label>
//                 <Input
//                     type="tel"
//                     name="number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required

//                     id={idInputNamber}

//                     value={number}
//                     onChange={handelChangeInput}
//                     />

//                 <Button onClick={hanleSubmit} type="submit">Add</Button>
//         </FormContact> 
//     );
// }