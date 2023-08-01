import css from './Filter.module.css';
import PropTypes from 'prop-types';
function Filter({ onChange, searchQuery }) {
  return (
    <form className={css.form}>
      <label htmlFor="" className={css.label}>
        find contacts by name
        <input
          type="text"
          name="query"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={searchQuery}
          onChange={onChange}
          className={css.input} // Применяем стиль к input
        />
      </label>
    </form>
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
  searchQuery: PropTypes.string,
};
