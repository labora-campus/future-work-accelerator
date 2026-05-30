import { MercadoPagoConfig, Preference } from 'mercadopago';

// Configurar cliente de Mercado Pago
const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN || '' });

export default async function handler(req: any, res: any) {
  // Permitir CORS para desarrollo local si es necesario (Vercel ya lo maneja pero por las dudas)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { productId } = req.body;

    let items = [];
    
    if (productId === 'pago-unico') {
      items = [
        {
          id: 'pago-unico',
          title: 'Bootcamp Future Work - Pago Único (15% OFF)',
          quantity: 1,
          unit_price: 293250,
          currency_id: 'ARS',
        }
      ];
    } else if (productId === 'cuotas') {
      items = [
        {
          id: 'cuotas',
          title: 'Bootcamp Future Work - Cuota 1',
          quantity: 1,
          unit_price: 172500,
          currency_id: 'ARS',
        }
      ];
    } else {
      return res.status(400).json({ error: 'Invalid productId' });
    }

    const preference = new Preference(client);
    
    // Obtener la URL base para las redirecciones
    const host = req.headers.host || 'localhost:5173';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    const response = await preference.create({
      body: {
        items: items,
        back_urls: {
          success: `${baseUrl}/pago?status=success`,
          failure: `${baseUrl}/pago?status=failure`,
          pending: `${baseUrl}/pago?status=pending`,
        },
        auto_return: 'approved',
        // Esto permite que se abra en un popup si usamos Wallet
        purpose: 'wallet_purchase'
      }
    });

    return res.status(200).json({ id: response.id });
  } catch (error) {
    console.error('Error creando la preferencia de pago:', error);
    return res.status(500).json({ error: 'Error creando la preferencia' });
  }
}
