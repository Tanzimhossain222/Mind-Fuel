"use server"

const url = `${process.env.SHOPIFY_STORE_URL}/admin/api/2021-07/products.json`;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

export async function getProducts() {
    const product = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN
        } as HeadersInit
    });
    const productData = await product.json();
    return productData;
} 


export async function getProductById(id: string) {
    const url = `${process.env.SHOPIFY_STORE_URL}/admin/api/2024-10/products/${id}.json`;
    const product = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN
        } as HeadersInit
    });
    const productData = await product.json();

    return productData;

}