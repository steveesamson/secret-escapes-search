import React, { FC } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { FullSale } from "../../types";
import { Title, Text, Link } from "../common";
import Carousel from './Carousel';

interface SearchDetailProps {
  sale: FullSale;
}
const SearchDetail: FC<SearchDetailProps> = ({
  sale: {
    editorial: { title, destinationName, hotelDetails },
    photos,
    prices: {
      leadRate: { forDisplay },
    },
  },
}): JSX.Element => {

  return (
    <Detail>
      <Helmet>
        <title>Secret Escapes :: {title} details</title>
      </Helmet>
      <Hero>
        <Carousel photos={photos} title={title} />
        <ContentSpace>
          <StyledTitle>{title}</StyledTitle>
          <StyledText>{destinationName}</StyledText>
          <PriceTag>
            From <strong>{forDisplay}</strong>
          </PriceTag>
          <StyledLink title="Book now">Book Now</StyledLink>
        </ContentSpace>
      </Hero>
      <DetailContent
        dangerouslySetInnerHTML={{ __html: hotelDetails }}
      ></DetailContent>
    </Detail>
  );
};

export default SearchDetail;

const Detail = styled.section`
  outline: none;
  color: var(--slate-800);
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  margin: 0;
  transition: all 0.37s ease-in-out;
  background-color: var(--white);
  border: 1px solid var(--slate-300);
`;

const ContentSpace = styled.div`
  width:100%;
  background-color: var(--slate-900);
  padding: 16px;

   @media screen and (min-width: 600px) {
    width: 250px;
  }
`;
const StyledLink = styled(Link)`
  background-color: var(--tomato);
  border-color: var(--tomato);
  color: var(--white);
  justify-content: center;
  margin-top: 16px;
  border-radius: 0 30px 30px 0;
  font-weight: 800;
  text-transform: uppercase;
  &:hover {
    background-color: var(--tomato);
    border-color: var(--tomato);
    color: var(--slate-50);
  }
`;
const StyledText = styled(Text)`
  color: var(--slate-200);
`;

const StyledTitle = styled(Title)`
  font-weight: 600;
  color: var(--slate-400);
`;



const Hero = styled.div`
   @media screen and (min-width: 600px) {
    display:flex;
    flex-direction:row;
  }
   
`;

const PriceTag = styled.div`
  color: var(--slate-300);
  text-align: left;
  padding: 16px 0;
  & strong {
    color: var(--tomato);
    font-size: 24px;
    font-weight: 800;
  }
`;
const DetailContent = styled.div`
  padding: 16px 32px;
  text-align: left;
   & > ul,
   & > div {
    font-size:14px;
   }
`;
