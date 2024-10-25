'use client';

import { Box, Modal } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function ModalUnderConstructionAutomatic() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        className="modal--under-construction"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal--box" sx={style}>
          <h2 id="modal-modal-title">Página en Construcción</h2>
          <p id="modal-modal-description">
            ¡Gracias por tu interés en nuestros productos! Actualmente estamos construyendo nuestra
            página web. Algunas funcionalidades, como la compra en línea, pueden no estar
            disponibles en este momento. Te pedimos disculpas por cualquier inconveniente y te
            agradecemos tu paciencia.
          </p>
        </Box>
      </Modal>
    </div>
  );
}
