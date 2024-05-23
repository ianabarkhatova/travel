import styled from "styled-components";

type SectionDescriptionPropsType = {
    align?: string
    display?: string
}

export const SectionDescription = styled.span<SectionDescriptionPropsType>`
    text-align: ${props => props.align || "center"};
    display: ${props => props.display || "block"};
`