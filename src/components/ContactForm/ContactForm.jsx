import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSumbit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    if (!name || !number) {
      return;
    }

    this.props.addContact({
      name: name,
      number: number,
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.contactForm} action="" onSubmit={this.handleSumbit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={this.handleInput}
          className={css.inputField}
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          required
          value={this.state.number}
          onChange={this.handleInput}
          className={css.inputField}
        />
        <button type="submit" className={css.submitButton}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
