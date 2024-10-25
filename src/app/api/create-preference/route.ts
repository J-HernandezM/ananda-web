import MercadoPagoConfig, { Preference } from 'mercadopago';
import { NextRequest, NextResponse } from 'next/server';
import { Order } from '@/stores/cartStore';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN || '',
});

export async function POST(request: NextRequest) {
  try {
    const { orders }: { orders: Order[] } = await request.json();
    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: orders.map(order => ({
          id: order.product.id.toString(),
          title: order.product.title,
          quantity: order.quantity * order.promo,
          unit_price: order.product.priceDetails.find(p => p.quantity === order.promo)?.value || 0,
        })),
        back_urls: {
          success: process.env.HOST + '/order-summary/success',
          failure: process.env.HOST + '/order-summary/failure',
          pending: process.env.HOST + '/order-summary/pending',
        },
        auto_return: 'approved',
      },
    });

    return NextResponse.json({ preferenceId: response.id });
  } catch (error) {
    console.error('Error al crear preferencia', error);
    return NextResponse.json({ error: 'Error al crear la preferencia' }, { status: 500 });
  }
}
