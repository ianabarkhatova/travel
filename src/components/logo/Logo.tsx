import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <Link href="">
            <Icon iconId={'logo'} width={"100"} height={"41"} viewBox={"0 0 100 41"}/>
            <StyledIcon>
                <Icon iconId={"arrow"} width={"96px"} height={"26px"} viewBox={"0 0 96 32"}/>
            </StyledIcon>

        </Link>
    );
};

const Link = styled.a`
    display: flex;
    flex-direction: column;
    position: relative;
`

const StyledIcon = styled.div`
    position: absolute;
    top: 16px;
    left: 28px;
`