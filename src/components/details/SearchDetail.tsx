import styled from "styled-components";
import { Title, Text, Image, Link } from "../common";


const SearchDetail = () => (<Detail>
    <Hero>
        <ImageSpace>
            <StyledImage src='https://secretescapes-web.imgix.net/hotels/1628/d67e35ed_ef62_40e1_b6fa_bac50888bdc8.jpg?auto=format,compress' alt='ss' />
        </ImageSpace>
        <ContentSpace>
            <StyledTitle>Contemporary London pad by St Paul's Cathedral - Refundable hotel</StyledTitle>
            <StyledText>Leonardo Royal London Hotel St Paul's, Central London</StyledText>
            <PriceTag>
                From <strong>$23.09</strong>
            </PriceTag>
            <StyledLink>
                Book Now
            </StyledLink>
        </ContentSpace>
    </Hero>
    <DetailContent dangerouslySetInnerHTML={{ __html: '<p>Hello there</p>' }} ></DetailContent>


</Detail>);

export default SearchDetail


const Detail = styled.section`
  outline: none;
  color: var(--slate-800);
  font-size: 16px;
  font-weight: 400;
  padding:0;
  margin:0;
  transition: all 0.37s ease-in-out;
  background-color: var(--white);
  border:1px solid var(--slate-300);
`;


const ImageSpace = styled.div`
    flex:1;
    padding:0;
`;
const ContentSpace = styled.div`
    width:250px;
    background-color: var(--slate-900);
    padding:16px;
`;
const StyledLink = styled(Link)`
    background-color: var(--tomato);
    border-color: var(--tomato);
    color: var(--white);
    justify-content:center;
    margin-top:16px;
    border-radius:0 30px 30px 0;
    font-weight:800;
    text-transform:uppercase;
    &:hover{
        background-color: var(--tomato);
        border-color: var(--tomato);
        color: var(--slate-50);
    }
`;
const StyledText = styled(Text)`
    color: var(--slate-200);
`;

const StyledTitle = styled(Title)`
    font-weight:600;
    color: var(--slate-400);
`;

const StyledImage = styled(Image)`
    width:100%;
`;

const Hero = styled.div`
    display:flex;
    flex-direction:row;
`;

const PriceTag = styled.div`
    color: var(--slate-300);
    text-align:left;
    padding:16px 0;
    & strong{
        color: var(--tomato);
        font-size:24px;
        font-weight:800;
    }

`;
const DetailContent = styled.div`
    padding:16px;
    text-align:left;
`;
