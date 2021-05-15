import React, { forwardRef } from 'react';
import MenuItem from './MenuItem';
import './styles.css';

const Menu = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    {list.map((item) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </main>
));

export default Menu;
