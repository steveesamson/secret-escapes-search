import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_SALE = gql`
  query getSale($saleId: String!) {
    sale(saleId: $saleId) {
      editorial {
        title
        destinationName
        hotelDetails
      }
      prices {
        leadRate {
          forDisplay
        }
      }
      photos {
        url
      }
    }
  }
`;

export const useSale = (saleId: string) =>
  useQuery(GET_SALE, {
    variables: {
      saleId,
    },
  });
