import styled from "styled-components";
import {theme} from "../../styles/Theme";

type SectionDescriptionPropsType = {
    align?: string
    display?: string
}

export const SectionDescription = styled.span<SectionDescriptionPropsType>`
    text-align: ${props => props.align || "center"};
    display: ${props => props.display || "block"};
    color: ${theme.colors.accent};
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
`