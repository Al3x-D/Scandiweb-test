import React from 'react';
import Cart from './Cart';

class FakeCart extends React.PureComponent {
  constructor(props) { 
    super(props);      
  }

  render() {
    return (
      <Cart/>
    );
  } 
}

export default FakeCart;