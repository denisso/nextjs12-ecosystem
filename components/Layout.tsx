import { ReactNode } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { switchMode, selectMode } from "./sliceMode";

const Container = styled.main`
    width: 80%;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${({ theme }) => theme.palette.myColor};
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        & > * + * {
            margin-left: 1rem;
        }
    }
`;

export default function Layout({ children }: { children: ReactNode }) {
    const mode = useSelector(selectMode);
    const dispatch = useDispatch();
    return (
        <Container>
            <header>
                <Button
                    variant="contained"
                    onClick={() => dispatch(switchMode())}
                >
                    Switch Theme
                </Button>
                <span>Current: {mode}</span>
            </header>
            <main>{children}</main>
        </Container>
    );
}
