import { FC, ReactNode } from "react";
import styled from "styled-components";

interface PageLoaderProps {
    message?: string;
    size?: number;
}
interface PageErrorProps {
    message?: string;
}
interface IconProps {
    size: number;
    children: ReactNode;
}
export const Icon: FC<IconProps> = ({ children, size = 24 }): JSX.Element => (<SvgIcon fill='currentColor' width={size} height={size} viewBox="0 0 24 24">
    {children}
</SvgIcon>);

export const PageError: FC<PageErrorProps> = ({ message }) => (<ErrorWrapper>
    <Icon size={36}>
        <path d="M16.971 0h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-1.402 16.945l-3.554-3.521-3.518 3.568-1.418-1.418 3.507-3.566-3.586-3.472 1.418-1.417 3.581 3.458 3.539-3.583 1.431 1.431-3.535 3.568 3.566 3.522-1.431 1.43z" />
    </Icon>
    <LoaderText>{message}</LoaderText>
</ErrorWrapper>);

export const PageLoader: FC<PageLoaderProps> = ({ message = 'loading...', size = 36 }) => (<NetworkIndicator>
    <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 100 100">
        <circle fill="none" stroke="currentColor" strokeWidth="9" cx="50" cy="50" r="40" opacity="0.5" />
        <circle fill="currentColor" stroke="currentColor" strokeWidth="7" cx="13" cy="54" r="9">
            <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 48"
                to="360 50 52"
                repeatCount="indefinite" />
        </circle>
    </svg>
    <LoaderText>{message}</LoaderText>
</NetworkIndicator>);


const SvgIcon = styled.svg``;


export const Image = styled.img`
        width:250px;
`

export const Title = styled.h3`
    color: var(--slate-700);
    margin-bottom:8px;
    text-align:left;
`;

export const Text = styled.p`
    font-size:16px;
    line-height:1.6;
    color: var(--slate-700);
     text-align:left;
`;

export const AlignRight = styled.div`
    margin-top:16px;
    display:flex;
    justify-content:flex-end;
    
`;
export const Link = styled.a`
    display:flex;
    align-items:center;
    font-size:16px;
    line-height:1.6;
    color: var(--slate-900);
    background-color: var(--slate-300);
    padding:6px 16px;
    border:1px solid var(--slate-300);
    border-radius:8px;
    cursor: pointer;
    text-decoration:none;
    & span{
        margin-right:7px;
        font-weight:500;
    }
    &:hover{
        background-color: var(--slate-200);
    }
`;
export const Button = styled.button`
    display:flex;
    align-items:center;
    font-size:16px;
    line-height:1.6;
    color: var(--slate-900);
    background-color: var(--slate-300);
    padding:6px 16px;
    border:1px solid var(--slate-300);
    border-radius:8px;
    cursor: pointer;
    & span{
        margin-right:7px;
        font-weight:500;
    }
    &:hover{
        background-color: var(--slate-200);
    }
`;

export const ErrorWrapper = styled.section`
    display:flex;
    align-items:center;
    background-color: var(--white);
    border-radius:8px;
    border:1px solid var(--slate-500);
    color:var(--tomato);
    font-size:18px;
    max-width:500px;
    min-width:320px;
    padding:16px;
    margin:64px auto 0;
`;

export const NetworkIndicator = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: var(--white);
    border-radius:8px;
    border:1px solid var(--slate-100);
    color:var(--slate-700);
    font-size:18px;
    max-width:500px;
    min-width:320px;
    padding:16px;
    margin:64px auto 0;
`;
const LoaderText = styled(Text)`
    font-size:18px;
    margin-left:8px;
    font-weight:800;
`;