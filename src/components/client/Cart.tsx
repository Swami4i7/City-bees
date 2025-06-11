import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

interface CartProps {
  cartCount: number;
  selectedCategory: string;
}

const Cart: React.FC<CartProps> = ({ cartCount, selectedCategory }) => {
  const [buttonText, setButtonText] = useState<string>('Select Service Provider');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCategory === 'Standard') {
      if (cartCount > 0) {
        setButtonText(`View Cart (${cartCount})`);
        setIsDisabled(false);
      } else {
        setButtonText('Select Service Provider');
        setIsDisabled(true);
      }
    } else if (selectedCategory === 'Non Standard') {
      setButtonText('Select Service Provider');
      setIsDisabled(false);
    }
  }, [cartCount, selectedCategory]);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex justify-between items-center">
      {/* <span className="text-lg">
        {selectedCategory === 'Standard' && cartCount > 0 ? `View Cart (${cartCount})` : 'Cart'}
      </span> */}
      <Button
        className="w-full bg-black text-white"
        disabled={isDisabled}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Cart;
