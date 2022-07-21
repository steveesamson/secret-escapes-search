export type Photo = {
  url: string;
};
type Prices = {
  leadRate: {
    forDisplay: string;
  };
};
type Editorial = {
  title: string;
  destinationName: string;
  hotelDetails: string;
};

export interface Sale {
  id: string;
  editorial: Editorial;
  photos: Photo[];
}
export interface FullSale extends Sale {
  prices: Prices;
}

export type SearchResult = {
  resultCount: number;
  sales: Sale[];
  query?: string;
};
