import { FC } from "react";
import styled from "styled-components";
import { Sale } from "../../types";
import { Icon } from "../common";
import { Text, Title, Image, AlignRight, Link } from "../common";

interface SearchItemProps {
    sale: Sale;
}

const SearchItem: FC<SearchItemProps> = ({ sale: { editorial: { title, destinationName }, photos, id } }) => (<Item>
    <Image src={photos[0].url} alt={title} loading="lazy" />
    <ContentSpace>
        <Title>{title}</Title>
        <Text>{destinationName}</Text>
        <AlignRight>
            <Link href={`/sale/${id}`}>
                <span>See detail</span>
                <Icon size={16}>
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
                </Icon>
            </Link>
        </AlignRight>
    </ContentSpace>

</Item>);

export default SearchItem


const Item = styled.li`

  outline: none;
  color: var(--slate-800);
  font-size: 16px;
  font-weight: 400;
  padding:0;
  margin-top:8px;
  transition: all 0.37s ease-in-out;
  background-color: var(--white);
  border:1px solid var(--slate-300);

  & img{
    width:100%;
  }

  &:hover{
    box-shadow: var(--shadow);
    background-color: var(--slate-50);
  }

  @media screen and (min-width: 600px) {
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    & img{
       width:250px;
    }
  }
`;



const ContentSpace = styled.div`
    flex:1;
    padding:16px 24px;
`;

