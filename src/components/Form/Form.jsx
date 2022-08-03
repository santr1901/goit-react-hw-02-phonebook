import React, { Component } from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

class Form extends Component {
  id = nanoid();
  state = {
    name: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addToContacts = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <form className={css.form} onSubmit={this.addToContacts}>
        <label htmlFor={this.id}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.id}
            onChange={this.handleChange}
            value={name}
          />
        </label>

        <button type="subbmit">Add contact</button>
      </form>
    );
  }
}

export default Form;
