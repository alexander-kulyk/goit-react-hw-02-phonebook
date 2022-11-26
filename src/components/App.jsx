
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
      this.addNewCotact(values)
      resetForm()
  }

  addNewCotact = values =>{
    const {name, number} = values;
    const {contacts} = this.state

    // const checkContact = contacts.some(item => item.name === name);
    const checkContact = contacts.find(item => item.name === name);
    
    const newContact = {
      id: nanoid(),
      name,
      number
    }

    if (checkContact !== undefined) {
      alert(`${name} is already in contacts.`)
    }else{
      this.setState(pS =>({
        contacts: [newContact, ...pS.contacts]
      }))
  
    }
    
  }

  deleteContact = contactId =>{
    this.setState(pS =>({
      contacts: pS.contacts.filter(({id}) => id !== contactId)
    }))
  }

  handleFindContact = e =>{
    this.setState({filter: e.target.value})
  }

  getVisibleContact = () =>{
    const {contacts, filter} = this.state;
    const normalizeFilter = filter.toLocaleLowerCase()

    return contacts.filter(({name})=>
       name.toLocaleLowerCase().includes(normalizeFilter)
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
            deleteContact = {this.deleteContact}
            />
        </Section>  

      </Container>
    );

  }

}



