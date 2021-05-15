import React from 'react';
import './styles.css';

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className='btnAddRemove'>
      {quantity !== 0 ? (
        <div className='btnAddRemove-positive'>
          <i
            class='fa fa-minus'
            aria-hidden='true'
            onClick={handleRemoveItem}
          ></i>
          <span> {quantity}</span>
          <i class='fa fa-plus' aria-hidden='true' onClick={handleAddItem}></i>
        </div>
      ) : (
        <div onClick={handleAddItem} className='btnAddRemove-negative'>
          <span>ADD</span>
          <i class='fa fa-plus' aria-hidden='true'></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAddRemoveItem;
