import React, { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Landing: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const [term, setTerm] = useState<string>('');

    const onSearch = useCallback(() => {
        if (!term) return;
        navigate(`/search?query=${encodeURIComponent(term)}`);
    }, [navigate, term])

    return (<PageWrapper>
        <Page>
            <SearchInput
                type='text'
                placeholder='Enter a location to search.'
                onChange={(e) => setTerm((e.target as HTMLInputElement).value)}
            />
            <SearchButton type='button' onClick={onSearch}>Search</SearchButton>
        </Page>
    </PageWrapper>)

}

export default Landing;

const PageWrapper = styled.section`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Page = styled.div`
    margin-top:-120px;
    width:500px;
    display:flex;
    justifyContent:flex-start;
    align-items:center;
    border:1px solid var(--slate-500);
    border-radius:8px;
    overflow:hidden;
`;

const SearchInput = styled.input`
    flex:1;
    border:none;
    outline:none;
    font-size:16px;
    padding:8px 16px;
`;

const SearchButton = styled.button`
    outline:none;
    background-color: var(--slate-700);
    border:1px soid var(--slate-700);
    color: var(--slate-100);
    cursor:pointer;
    font-size:16px;
    font-weight:500;
    padding:8px 24px;
    transition:all 0.37s ease-in-out;

    &:hover{
        background-color: var(--slate-500);
    }
`;

