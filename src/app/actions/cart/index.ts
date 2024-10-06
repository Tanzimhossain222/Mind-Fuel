'use server';

import { addToCart, createCart, getCart, removeFromCart, updateCart } from '@/lib/shopify/shopify';
import { cookies } from 'next/headers';

export const addItem = async (variantId: string | undefined): Promise<String | undefined> => {
  let cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.id;
    cookies().set('cartId', cartId);
  }

  if (!variantId) {
    return 'Missing product variant ID';
  } 

  // Encode the variantId as the global merchandiseId
  const encodedId = Buffer.from(`gid://shopify/ProductVariant:${variantId}`).toString('base64');

  try {
    const res = await addToCart(cartId, [{ merchandiseId: encodedId, quantity: 1 }]);
    console.log(res);
  } catch (e) {
    console.error(e);
    return 'Error adding item to cart';
  }
};  

export const removeItem = async (lineId: string): Promise<String | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }
  try {
    await removeFromCart(cartId, [lineId]);
  } catch (e) {
  
    return 'Error removing item from cart';
  }
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<String | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }
  try {
    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity
      }
    ]);
  } catch (e) {
    return 'Error updating item quantity';
  }
};