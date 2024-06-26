import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {NavBar} from "./navBar/NavBar";
import {Button} from "../../components/common/Button";
import {FlexWrapper} from "../../components/common/FlexWrapper";
import {Container} from "../../components/common/Container";
import {NavBarMobile} from "./navBarMobile/NavBarMobile";
import {theme} from "../../styles/Theme";

const navBarItems = ["Home", "About", "Upcoming Packages"]

export const Header = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <StyledHeader>
            <Container>
                <ContentWrapper>
                    <Logo/>
                    {width < breakpoint ? <NavBarMobile navBarItems={navBarItems}/>
                        : <NavBar navBarItems={navBarItems}/>}

                    <Button type={"submit"} small>Get in Touch</Button>
                </ContentWrapper>
            </Container>
        // </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    padding: 50px 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
    ${Button} {
        max-width: 152px;
        
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


