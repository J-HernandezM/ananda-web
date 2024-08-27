'use client';

import { Slide, Snackbar } from '@mui/material';
import { FC, useState } from 'react';
import './withSnackBar.scss';

export type SetSnackbar = (state: boolean) => void;

export default function withSnackbar<P extends object>(
  WrappedComponent: FC<P & { setSnackbar: SetSnackbar }>
): FC<P> {
  return function WrapperWithSnackBar(props: P) {
    const [open, setOpen] = useState(false);
    const setSnackbar = (state: boolean) => {
      setOpen(state);
    };

    return (
      <>
        <WrappedComponent {...props} setSnackbar={setSnackbar}></WrappedComponent>
        <Snackbar
          className="snackbar"
          autoHideDuration={3000}
          open={open}
          onClose={() => setSnackbar(false)}
          message="Añadido al carrito"
          TransitionComponent={Slide}
        ></Snackbar>
      </>
    );
  };
}
