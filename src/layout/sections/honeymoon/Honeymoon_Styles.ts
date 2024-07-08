import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Honeymoon = styled.section`
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${theme.media.large} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
}
`

export const S = {
    Honeymoon,
    ContentWrapper
}