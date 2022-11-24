
import React, { Component } from "react";
import { Contact } from "./ContactList/ContactList";
import Container from "./Container/Conteiner.styled";
import { Form } from "./Form/Form";
import { Section } from "./Section/Section";


export class App extends Component  {
  state = {
    contacts: [],
    name: 'Yes'
  }

  render(){
    return (
      <Container>
        <Section title='Phonebook'>
          <Form state = {this.state}/>
        </Section>
        <Section title='Contact'>
          <Contact/>
        </Section>
        
      </Container>
    );


  }

}



