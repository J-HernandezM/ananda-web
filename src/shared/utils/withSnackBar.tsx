'use client';

import { SetSnackbar } from '@/types/types';
import { Slide, Snackbar } from '@mui/material';
import { FC, useState } from 'react';

export default function withSnackbar<P extends object>(
  Component: FC<P & { setSnackbar: SetSnackbar }>
): FC<P> {
  return function WrapperWithSnackBar(props: P) {
    const [open, setOpen] = useState(false);
    const setSnackbar = (state: boolean) => {
      setOpen(state);
    };

    return (
      <>
        <Component {...props} setSnackbar={setSnackbar}></Component>
        <Snackbar
          className="snackbar"
          autoHideDuration={3000}
          open={open}
          onClose={() => setSnackbar(false)}
          message="Añadir al carrito"
          TransitionComponent={Slide}
        ></Snackbar>
      </>
    );
  };
}
