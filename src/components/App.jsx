
import React, { Component } from "react";
import { Contact } from "./ContactList/ContactList";
import Container from "./Container/Conteiner.styled";
import { Form } from "./Form/Form";
import { Section } from "./Section/Section";

import { nanoid } from 'nanoid'



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name:'',
    number:'',
    filter:''
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
      name, 
      id, 
      number,
    });

    this.rest()
  }

  handleFindContact = e =>{
      const {value, name} = e.target
      this.setState({
        [name]:value
      })
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
          <Contact 
            state = {this.state}
            handleFindContact = {this.handleFindContact}
            />
        </Section>  

      </Container>
    );

  }

}



