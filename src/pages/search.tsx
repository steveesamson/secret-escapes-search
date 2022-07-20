import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePager, useQueryStringChages, useSearch } from "../hooks";
import { PageError, PageLoader } from "../components/common";
import SearchList from "../components/search/SearchResult";
import SearchFooter from "../components/search/Footer";
import { SearchResult } from "../types";

const SearchResultList = (): JSX.Element => {
    const [page, nextPage] = useState<number>(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const { doSearch, called, loading, error, data } = useSearch(query, page);
    const { onNext, onPrev } = usePager({ nextPage });

    useQueryStringChages({ searchParams, setSearchParams, doSearch });


    if (!called) return <></>;

    if (loading) {
        return <PageLoader />;
    }
    if (error) {
        return <PageError message={error?.message} />;
    }
    const { saleSearch } = data;
    const { resultCount, sales } = saleSearch as SearchResult;

    if (!resultCount) {
        return <PageError message="Sorry there are no matches for your query" />;
    }

    return (
        <>
            <SearchList {...{ resultCount, sales }} />
            <SearchFooter {...{ page, resultCount, onNext, onPrev }} />
        </>
    );
};

export default SearchResultList;

