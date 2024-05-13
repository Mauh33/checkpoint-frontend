import { ApolloClient, InMemoryCache } from "@apollo/client";
require("dotenv").config();

const uri = process.env.NEXT_PUBLIC_APOLLO_URI;

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
  credentials: "include",
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy:"cache-and-network",
    },
  },
});

export default client;
