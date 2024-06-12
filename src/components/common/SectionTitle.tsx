import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

type SectionTitlePropsType = {
    align?: string
    display?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    text-align: ${props => props.align || "center"};
    display: ${props => props.display || "block"};
    text-transform: capitalize;
    ${font({
        family: "'Volkhov', serif",
        weight: 700,
        Fmax: 50,
        Fmin: 36,
        color: theme.colors.darkPrimaryFont
    })}
`