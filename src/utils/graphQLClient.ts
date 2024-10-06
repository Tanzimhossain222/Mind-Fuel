import { GraphQLClient } from "graphql-request";

const endpoint = `${process.env.SHOPIFY_STORE_URL}/api/2024-10/graphql.json`;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": storefrontAccessToken,
  } as HeadersInit,
});

