import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

function Contactlist({ contacts, deliteElement }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contact List</h2>
      <ul className={css.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={number} className={css.item}>
            <p className={css.name}>
              {name}: {number}
            </p>
            <button onClick={() => deliteElement(id)}>Delite</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contactlist;

Contactlist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deliteElement: PropTypes.func.isRequired,
};
