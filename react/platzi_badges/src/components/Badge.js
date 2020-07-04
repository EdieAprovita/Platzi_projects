import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    const firstName = 'Edgar';
    const lastName = 'Chavero';
    return (
      <div className='Badge'>
        <header className='Badge__header'>
          <img src={confLogo} alt='Logo de la conferencia' />
        </header>

        <main className='Badge__section-name'>
          <img
            className='Badge__avatar'
            src='https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon'
            alt='Avatar'
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </main>

        <div className='Badge__section-info'>
          <h3>Frontend Engineer</h3>
          <div>@sparragus</div>
        </div>

        <footer className='Badge__footer'>#platziconf</footer>
      </div>
    );
  }
}

export default Badge;
