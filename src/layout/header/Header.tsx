import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {NavBar} from "../../components/menu/NavBar";
import {Button} from "../../components/common/Button";
import {FlexWrapper} from "../../components/common/FlexWrapper";

export const Header = () => {
    return (
            <StyledHeader>
                    <FlexWrapper justify={"space-between"}>
                        <Logo/>
                        <NavBar/>
                        <Button type={"submit"} style={{ width: "152px", height: "58px"}}>Get in Touch</Button>
                    </FlexWrapper>
            </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: lightpink;
    min-height: 250px;
`

