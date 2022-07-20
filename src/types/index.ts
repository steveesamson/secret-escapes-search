type Photo = {
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

export type Sale = {
  id: string;
  editorial: Editorial;
  photos: Photo[];
  prices?: Prices;
};

export type SearchResult = {
  resultCount: number;
  sales: Sale[];
};
