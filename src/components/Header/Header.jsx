import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = function ({ handleFormSubmit }) {
  const [searchTerm, setSearchTerm] = useState('cat');

  const onTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    // handleFormSubmit(event.target.value);
    handleFormSubmit(searchTerm);
  };

  return (
    <div className={styles.header}>
      <a href="/" className={styles.headerLogo}>
        LOGO
      </a>

      <div className={styles.headerForm}>
        <form onSubmit={onFormSubmit} className={styles.headerContainer}>
          <input type="text" value={searchTerm} onChange={onTermChange} />
        </form>
      </div>

      <div>
        <a href="/">NAV</a>
      </div>
    </div>
  );
};

export default Header;
