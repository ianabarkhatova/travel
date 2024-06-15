import React from 'react';
import {Button} from "../common/Button";
import styled from "styled-components";
import {SectionDescription} from "../common/SectionDescription";
import {SectionTitle} from "../common/SectionTitle";
import {FlexWrapper} from "../common/FlexWrapper";
import {theme} from "../../styles/Theme";

type PackagePropsType = {
    description: string
    title: string
    text: string
}

export const Package = (props: PackagePropsType) => {
    return (
        <FlexWrapper>
            <StyledPackage>
                <SectionDescription align={"left"}>{props.description}</SectionDescription>
                <SectionTitle align={"left"}>{props.title}</SectionTitle>
                <PackageText>{props.text}</PackageText>
                <Button type={"submit"} big>View Packages</Button>
            </StyledPackage>
        </FlexWrapper>
    );
};

const StyledPackage = styled.div`
    max-width: 584px;
    
    ${SectionTitle} {
        margin: 20px 0 30px;
    }
`

const PackageText = styled.p`
    color: ${theme.colors.darkSmallerFont};
    font-size: 16px;
    font-weight: 400;
    text-align: left;
`



