import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './App.module.css';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitData = ({ name, number }) => {
    const arrName = this.state.contacts.map(contact => contact.name);
    const subData = {
      id: nanoid(),
      name,
      number,
    };

    if (arrName.includes(subData.name)) {
      return alert(`${subData.name} is already in contact list`);
    }
    this.setState(prevState => ({
      contacts: [subData, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitData} />
        <div>
          <h2>Contacts</h2>

          <Filter filter={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={this.getFilterContact()}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
