'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { SwipeableDrawer } from '@mui/material';
import './mobileCategoriesFilter.scss';
import StyledButton from '@/shared/components/StyledButton';
import TuneIcon from '@mui/icons-material/Tune';
import { categories } from '.';

export default function MobileCategoriesFilter() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="mobileFilter">
      <StyledButton
        onclick={toggleDrawer(true)}
        text="Categorias"
        materialIcon={TuneIcon}
      ></StyledButton>
      <SwipeableDrawer
        className="mobileFilter--component"
        open={open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <Box className="mobileFilter--box" role="presentation">
          <div>
            <h3 className="filter--title">Categorias</h3>
            <ul className="mobileFilter--list">
              {categories.map(text => (
                <li className="mobileFilter--item" key={text}>
                  <label htmlFor={`mobileFilter--${text}`}>
                    {text}
                    <input id={`mobileFilter--${text}`} type="checkbox" />
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <StyledButton
            customClass="mobileFilter--button-confirm "
            onclick={toggleDrawer(false)}
            text="Aplicar filtros"
          ></StyledButton>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
