import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePager, useQueryStringChages, useSearch } from "../hooks";
import { PageError, PageLoader } from "../components/common";
import { SearchList, SearchFooter } from "../components/search";
import { SearchResult } from "../types";
import { Helmet } from "react-helmet-async";

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
            <Helmet>
                <title>Secret Escapes :: Search results for: {query}</title>
            </Helmet>
            <SearchList {...{ resultCount, sales, query }} />
            <SearchFooter {...{ page, resultCount, onNext, onPrev }} />
        </>
    );
};

export default SearchResultList;

