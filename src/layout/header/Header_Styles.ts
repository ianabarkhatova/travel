import styled from "styled-components";
import {Button} from "../../components/common/Button";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    position: fixed;
    padding-top: 50px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    width: 100vw;
    backdrop-filter: contrast(0.5);

    @media ${theme.media.small} {
        backdrop-filter: none;
    }
    
    ${Button} {
        min-width: 152px;
        
        @media ${theme.media.small} {
            display: none;
        }
    }
`

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
`

export const S = {
    Header,
    ContentWrapper
}


