import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URI as uri } from "./constants";
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});
export default client;
