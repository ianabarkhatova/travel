import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Partners = styled.section`
    background-color: ${theme.colors.primaryBg};
`

const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 75px 0;
    flex-wrap: wrap;
    gap: 14px;

    @media ${theme.media.medium} {
        justify-content: center;
        align-items: center;
        gap: 45px;
    }
`

export const S = {
    Partners,
    MainContent
}