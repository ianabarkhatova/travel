import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


export const FooterSectionTitle = styled.h3`
    padding-bottom: 24px;

    ${font({
        weight: 700,
        Fmax: 20,
        Fmin: 16,
        family: '"Manrope", sans-serif',
        color: theme.colors.darkFooterFont,
    })}
`