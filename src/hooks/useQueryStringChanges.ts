import { useEffect } from "react";
import { LazyQueryExecFunction } from "@apollo/client";
import { URLSearchParamsInit } from "react-router-dom";

interface useQueryStringChagesProps {
  searchParams: URLSearchParams;
  doSearch: LazyQueryExecFunction<
    any,
    {
      query: string;
      offset: number;
    }
  >;
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: any;
        }
      | undefined
  ) => void;
}
export const useQueryStringChages = ({
  searchParams,
  setSearchParams,
  doSearch,
}: useQueryStringChagesProps) => {
  useEffect(() => {
    const newQuery = searchParams.get("query");
    if (newQuery) {
      setSearchParams({ query: newQuery });
      doSearch();
    }
  }, [searchParams, setSearchParams, doSearch]);
};
