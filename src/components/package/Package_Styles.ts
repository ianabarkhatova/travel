import styled from "styled-components";
import {SectionTitle} from "../common/SectionTitle";
import {theme} from "../../styles/Theme";

const Package = styled.div`
    max-width: 584px;
    
    ${SectionTitle} {
        padding: 20px 0 30px;
    }
`

const PackageText = styled.p`
    color: ${theme.colors.darkSmallerFont};
    font-size: 16px;
    font-weight: 400;
    text-align: left;
`

export const S = {
    Package,
    PackageText
}

