import styled from "styled-components"
import {MarkdownEditor} from "./MarkdownEditor"
import { HTMLComponent } from "./HTMLComponent"
const Container = styled.div`
    display: flex;
    gap: 1rem;
`
export const MarkdownPreview = () => <Container>
    <MarkdownEditor/>
    <HTMLComponent/>
</Container>