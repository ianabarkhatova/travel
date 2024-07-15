import styled from "styled-components";
import {Button} from "../../components/common/Button";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    position: fixed;
    padding: 50px 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    width: 100vw;
    
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
    gap: 25px;
`

export const S = {
    Header,
    ContentWrapper
}


