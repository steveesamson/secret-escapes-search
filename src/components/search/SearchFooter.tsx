import { FC, useMemo } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight, Text, Button } from '../common';

interface SearchFooterProps {
    resultCount: number;
    page: number;
    onPrev: () => void;
    onNext: () => void;
}

const SearchFooter: FC<SearchFooterProps> = ({ resultCount, page, onPrev, onNext }) => {
    const max = useMemo(() => Math.ceil(resultCount / 10), [resultCount]);
    return (<Footer>
        <Text>
            Page {page + 1} of {max} pages | Total:{" "} {resultCount}
        </Text>
        <PagerWrapper>
            {!!page && <Pager type="button" className='previousButton' onClick={onPrev}>
                <ChevronLeft size={14} />
                <span>Prev</span>
            </Pager>
            }
            {max - 1 > page &&
                <Pager type="button" onClick={onNext}>
                    <span>Next</span>
                    <ChevronRight size={14} />
                </Pager>
            }
        </PagerWrapper>
    </Footer>);
}

export default SearchFooter;

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
  margin-top:32px;
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

