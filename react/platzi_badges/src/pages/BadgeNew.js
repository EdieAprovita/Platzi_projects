import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew_hero'>
          <img className='img-fluid' src={header} alt='' />
        </div>
      </div>
    );
  }
}

export default BadgeNew;
