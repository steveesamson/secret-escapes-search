import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URI as uri } from "./constants";
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          saleSearch: {
            merge(existing = {}, incoming = {}) {
              return incoming;
              // return {
              //   resultCount: incoming.resultCount,
              //   sales: [...(existing.sales || []), ...(incoming.sales || [])],
              // };
            },
          },
        },
      },
    },
  }),
});
export default client;
