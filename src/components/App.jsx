
import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Contact } from "./ContactList/ContactList";
import Container from "./Container/Conteiner.styled";
import { ContactForm } from "./Form/Form";
import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:''
  }

  handleSubmit = (values, {resetForm}) =>{
      const {name, number} = values;
      this.addNewCotact(name, number)
      resetForm()
  }

  addNewCotact = (name, number) =>{
    const {contacts} = this.state
    const checkContact = contacts.map(({name}) => 
       name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

       console.log(checkContact);
    const newContact = {
      id: nanoid(),
      name,
      number
    }

    // if (contacts) {
      
    // }
    this.setState(pS =>({
      contacts: [newContact, ...pS.contacts]
    }))

  }

  handleFindContact = e =>{
    this.setState({filter: e.target.value})
  }

  getVisibleContact = () =>{
    const {contacts, filter} = this.state;

    return contacts.filter(({name})=>
       name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
  }


  render(){
    const visibleContact = this.getVisibleContact()
    return (
      <Container>

        <Section title='Phonebook'>
          <ContactForm 
            state = {this.state} 
            handelChangeInput={this.handelChangeInput}
            handleSubmit = {this.handleSubmit}
            addNewCotact = {this.addNewCotact}
            />
        </Section>
        <Section title='Contact'>
          <Filter 
            title="Find contacs by name"
            state = {this.state}
            handleFindContact = {this.handleFindContact}
            />
          <Contact 
            visibleContact = {visibleContact}
            />
        </Section>  

      </Container>
    );

  }

}



