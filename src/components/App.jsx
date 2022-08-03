import React, { Component } from 'react';
import Form from './Form/Form';

import { customRandom, nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitData = ({ name }) => {
    const subData = {
      id: nanoid(customRandom),
      name,
    };
    console.log(subData);
    this.setState(prevState => ({
      contacts: [subData, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitData} />
        <div>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
