import { Wallet } from '@mercadopago/sdk-react';
import React from 'react';

type MercadoPagoButtonProps = {
  submitForm: () => unknown;
  handleWalletSubmit: (func: () => unknown) => Promise<unknown>;
};

// Use React.memo to avoid re-rendering the Wallet component each time a field in the form changes
const MemoizedMercadoPagoButton = React.memo(
  ({ submitForm, handleWalletSubmit }: MercadoPagoButtonProps) => (
    <Wallet
      onSubmit={() => handleWalletSubmit(submitForm)}
      locale="es-CO"
      customization={{
        texts: { valueProp: 'smart_option' },
        visual: {
          borderRadius: '100px',
          verticalPadding: '8px',
        },
      }}
    />
  )
);

MemoizedMercadoPagoButton.displayName = 'MemoizedWallet';

export default MemoizedMercadoPagoButton;
