import styled from "styled-components";
import { down } from "styled-breakpoints";
const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 3rem;
    ${down("lg")} {
        font-size: 2.2rem;
    }
    ${down("md")} {
        font-size: 1.8rem;
    }
    a {
        text-decoration: none;
        &:hover,
        :focus,
        :active {
            color: ${({ theme }) => theme.colors.secondary};
            text-decoration: underline;
        }
        transition: 1s color;
    }

    text-align: center;
    text-decoration: none;
    margin-bottom: 2rem;
`;

const Description = styled.p`
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
`;
const CodeTag = styled.code`
    background: #fafafa;
    border-radius: 5px;
    margin: 0 0.75rem;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { Main, Title, Description, CodeTag };
