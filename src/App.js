import React, { useContext } from 'react';
import { Pane, Heading, Text } from 'evergreen-ui'

import { AppContext } from './contexts'

import Product from './components/Product'
import Cart from './components/Cart';

const App = () => {
  const { setCartShown } = useContext(AppContext)
  const addItem = item => console.log('add', item)

  const products = [
    {id: 'iphone', name: 'iPhone XR', price: 3000},
    {id: 'pixel', name: 'Pixel 4', price: 3500},
    {id: 'roomba', name: 'Roomba', price: 700},
    {id: 'tv', name: '40" TV', price: 6000},
  ]

  const renderProducts = () => products.map(item => (<Product name={item.name} price={item.price} onClick={() => addItem(item)} />))

  return (
    <Pane clearfix>
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>Paulo's Shop</Heading>
        </Pane>
        <Pane>
          <Text marginRight={16} onClick={() => setCartShown(true)}>Cart: 1 product</Text>
        </Pane>
      </Pane>
      {renderProducts()}
      <Cart />
    </Pane>
  );
}

export default App;
