import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuanity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuanity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
