import { useLazyQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const SEARCH_SALES = gql`
  query searchSales($query: String!, $offset: Int!) {
    saleSearch(query: $query, travelTypes: "HOTEL_ONLY") {
      resultCount
      sales(limit: 10, offset: $offset) {
        id
        editorial {
          title
          destinationName
        }
        photos {
          url
        }
      }
    }
  }
`;

export const useSearch = (query: string, offset: number = 0) => {
  if (!query) throw new Error("Invalid input: No search term");
  const [doSearch, { error, loading, called, data }] = useLazyQuery(
    SEARCH_SALES,
    {
      variables: {
        query,
        offset,
      },
    }
  );
  return { doSearch, called, error, loading, data };
};
