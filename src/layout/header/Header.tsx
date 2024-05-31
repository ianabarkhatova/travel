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
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <NavBar navBarItems={navBarItems}/>
                    <NavBarMobile navBarItems={navBarItems}></NavBarMobile>
                    <Button type={"submit"} small>Get in Touch</Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
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
        @media ${theme.media.small} {
            display: none;
        }
    }
    
`


