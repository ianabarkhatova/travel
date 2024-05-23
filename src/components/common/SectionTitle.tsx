import styled from "styled-components";

type SectionTitlePropsType = {
    align?: string
    display?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    text-align: ${props => props.align || "center"};
    display: ${props => props.display || "block"};
`