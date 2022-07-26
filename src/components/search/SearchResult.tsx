import React, { FC } from "react";
import styled from "styled-components";
import { Sale, SearchResult } from "../../types";
import SearchItem from "./SearchItem";



const SearchList: FC<SearchResult> = ({ sales, resultCount, query }): JSX.Element => {
    return (
        <ListWrapper>
            <Header>Search results for {query}:</Header>
            <SearchItems>
                {sales.map((sale: Sale) => <SearchItem sale={sale} key={sale.id} />)}
            </SearchItems>

        </ListWrapper>

    );
};

export default SearchList;




const SearchItems = styled.ul`
  padding:0;
  margin:0;
  list-style:none;
`;

const ListWrapper = styled.section`
    margin:0 auto;
    padding:0;
`;

const Header = styled.h2`
  color: var(--slate-600);
  margin:16px 0;
  text-align:left;
`;


