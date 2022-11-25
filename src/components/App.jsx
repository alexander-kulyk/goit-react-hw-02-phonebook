
import React, { Component } from "react";
import { Contact } from "./ContactList/ContactList";
import Container from "./Container/Conteiner.styled";
import { Form } from "./Form/Form";
import { Section } from "./Section/Section";

import { nanoid } from 'nanoid'



export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handelChangeInput = e =>{
    
    const {value, name } = e.target;
    this.setState({[name]: value });
  }

  hanleSubmit = e =>{
    e.preventDefault()
    const id = nanoid()

    const {name, number, contacts} = this.state
    
    contacts.push({
      nameUser: name, 
      idUser: id, 
      numberUser: number
    });

    this.rest()
  }

  rest = () =>{
    this.setState({name:'', number:''})
  }


  render(){
    return (
      <Container>

        <Section title='Phonebook'>
          <Form 
            state = {this.state} 
            handelChangeInput={this.handelChangeInput}
            hanleSubmit = {this.hanleSubmit}
            />
        </Section>
        <Section title='Contact'>
          <Contact state = {this.state}/>
        </Section>  

      </Container>
    );

  }

}



