// @styles
import './quantitySelector.scss';

// @components
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface QuantitySelectorProps {
  handlers: {
    add: () => void;
    remove: () => void;
  };
  quantity: number;
  customClass?: string;
}

export default function QuantitySelector({
  handlers,
  quantity,
  customClass,
}: QuantitySelectorProps) {
  const { add, remove } = handlers;

  return (
    <div className={`control--quantityBox ${customClass}`}>
      <IconButton disabled={quantity <= 1} onClick={remove}>
        <RemoveIcon className="icons--hover" fontSize="small"></RemoveIcon>
      </IconButton>
      <span className="control--quantity">{quantity}</span>
      <IconButton disabled={quantity >= 20} onClick={add}>
        <AddIcon className="icons--hover" fontSize="small"></AddIcon>
      </IconButton>
    </div>
  );
}
