import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {HeaderNavBar} from "./headerNavBar/HeaderNavBar";
import {Button} from "../../components/common/Button";
import {FlexWrapper} from "../../components/common/FlexWrapper";
import {Container} from "../../components/common/Container";

const navBarItems = ["Home", "About", "Upcoming Packages"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <HeaderNavBar navBarItems={navBarItems}/>
                    <Button type={"submit"} small>Get in Touch</Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    padding: 18px 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

