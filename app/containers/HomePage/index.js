/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './button.block.css';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className='bg'>
      <h1>
        <div>
        <div className='a'> 
           <FormattedMessage {...messages.header} /></div>
        <button className='f'><span className='b e'>Hello</span></button>
        </div>
      </h1>
      <div>
      <div className='a'>HELLO</div>
          <div className='b'>HELLO</div>
          <div className='c'>HELLO</div>
          <div className='d'>HELLO</div>
          <div className='e'>HELLO</div>
          <div className='f'>HELLO</div>
          <div className='g'>HELLO</div>
          </div>
          <div className='a b c d e f g'>DEMO INheritance</div>
      </div>
    );
  }
}
// https://github.com/LeSGoel/demo.git
