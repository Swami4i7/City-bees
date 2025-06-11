import React from "react";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

interface AddButtonProps {
  onAdd: () => void;
  onRemove: () => void;
  quantity: number;
}

const AddButton: React.FC<AddButtonProps> = ({ onAdd, onRemove, quantity }) => {
  return (
    <div className="w-20 h-10"> {/* 🔹 Increased only height of the button */}
      {quantity > 0 ? (
        <div className="flex items-center justify-between border-2 border-[#226DB4] rounded-md px-3 w-full h-full">
          <Button
            variant="ghost"
            className="text-[#226DB4] p-0 flex items-center justify-center bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent focus:ring-0 focus:outline-none focus:text-[#226DB4]"
            onClick={onRemove}
            disabled={quantity === 0}
          >
            <MinusIcon size={10} />
          </Button>
          <span className="text-[#226DB4] font-medium text-md">{quantity}</span> {/* 🔹 Adjusted font size */}
          <Button
            variant="ghost"
            className="text-[#226DB4] p-0 flex items-center justify-center bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent focus:ring-0 focus:outline-none focus:text-[#226DB4]"
            onClick={onAdd}
          >
            <PlusIcon size={10} />
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          className="border-2 border-[#226DB4] text-[#226DB4] font-medium px-3 py-2 rounded-md w-full h-full flex items-center justify-center"
          onClick={onAdd}
        >
          Add
        </Button>
      )}
    </div>
  );
};

export default AddButton;
