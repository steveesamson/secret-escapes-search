import React, { FC, useCallback, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageWrapper } from './common';
import NavigationBar from './NavigationBar';

const Landing: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const [term, setTerm] = useState<string>('');

    const onSearch = useCallback(() => {
        if (!term) return;
        navigate(`/search?query=${encodeURIComponent(term)}`);
    }, [navigate, term]);

    const onKeyup = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            const { code } = e;
            if (code === 'Enter') {
                onSearch();
            }
        },
        [onSearch]
    );

    return (<PageWrapper>
        <Helmet>
            <title>Secret Escapes :: Search places</title>
        </Helmet>
        <NavigationBar isLanding />
        <Page>
            <SearchInput
                type='text'
                placeholder='Enter a location to search.'
                onKeyUp={onKeyup}
                onChange={(e) => setTerm((e.target as HTMLInputElement).value)}
            />
            <SearchButton type='button' onClick={onSearch}>Search</SearchButton>
        </Page>
    </PageWrapper>)

}

export default Landing;

const Page = styled.div`
    margin:120px auto 0;
    width:80%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    border:1px solid var(--slate-500);
    border-radius:8px;

    @media screen and (min-width: 700px) {
        width:600px;
    }

`;

const SearchInput = styled.input`
    flex:1;
    border:none;
    outline:none;
    font-size:16px;
    padding:8px 16px;
    border-radius:8px 0 0 8px;

     @media screen and (min-width: 700px) {
         font-size:24px;
    }
`;

const SearchButton = styled.button`
    outline:none;
    background-color: var(--slate-700);
    border:1px solid var(--slate-700);
    color: var(--slate-100);
    cursor:pointer;
    font-size:16px;
    font-weight:500;
    padding:8px 16px;
    border-radius:0 8px 8px 0;
    transition:all 0.37s ease-in-out;
    &:hover{
        background-color: var(--slate-500);
    }

    @media screen and (min-width: 700px) {
         font-size:24px;
    }
`;


