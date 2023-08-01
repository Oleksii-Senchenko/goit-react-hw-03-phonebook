import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contactlist/Contactlist';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
// const contactsKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Обнловилось поле контакс');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  addContact = data => {
    const finedNumber = this.state.contacts.find(
      contact => contact.number.toLowerCase() === data.number.toLowerCase()
    );
    if (finedNumber) {
      alert(
        `In your phoneBook already have this number his name is ${finedNumber.name}`
      );
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onChange = ({ target }) => {
    const normalizedValue = target.value.trim().toLowerCase();

    this.setState({
      searchQuery: normalizedValue,
    });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.searchQuery.trim().toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deliteElement = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <ContactForm addContact={this.addContact} />
        <Filter onChange={this.onChange} searchQuery={this.state.searchQuery} />
        <ContactList
          contacts={filteredContacts}
          deliteElement={this.deliteElement}
        />
      </>
    );
  }
}
