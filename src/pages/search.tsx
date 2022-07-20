import React, { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useQueryStringChages, useSearch } from "../api/hooks";
import {
    Icon,
    Text,
    Button,
    PageError,
    PageLoader,
} from "../components/common";
import SearchList from "../components/search/SearchResult";
import { SearchResult } from "../types";

const SearchResultList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, nextPage] = useState<number>(0);
    const query = searchParams.get("query") ?? "";
    const { doSearch, called, loading, error, data } = useSearch(query, page);

    useQueryStringChages({ searchParams, setSearchParams, doSearch });

    const onPrev = useCallback(() => {
        nextPage((prev: number) => prev - 1);
    }, [nextPage]);

    const onNext = useCallback(() => {
        nextPage((prev: number) => prev + 1);
    }, [nextPage]);

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
    const max = Math.ceil(resultCount / 10);

    return (
        <>
            <SearchList {...{ resultCount, sales }} />
            <Footer>
                <Text>
                    Page {page + 1} of {max} pages | Total:{" "}
                    {resultCount}
                </Text>
                <PagerWrapper>

                    {!!page && <Pager type="button" className='previousButton' onClick={onPrev}>
                        <Icon size={14}>
                            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167L16.67 24 4.5 12.004z" />
                        </Icon>
                        <span>Prev</span>
                    </Pager>
                    }
                    {max - 1 > page &&
                        <Pager type="button" onClick={onNext}>
                            <span>Next</span>
                            <Icon size={14}>
                                <path d="M5 3l3.057-3L20 12 8.057 24 5 21l9-9z" />
                            </Icon>
                        </Pager>
                    }
                </PagerWrapper>
            </Footer>
        </>
    );
};

export default SearchResultList;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--slate-200);
  background-color: var(--slate-100);
  color: var(--slate-800);
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  padding: 16px;
  margin-top:16px;
`;

const PagerWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Pager = styled(Button)`
    &.previousButton{
        margin-right:8px;
        & span{
            margin-left:7px;
            margin-right:0;
        }
    }
`;