import React from 'react';
import {Button} from "../common/Button";
import styled from "styled-components";
import {SectionDescription} from "../common/SectionDescription";
import {SectionTitle} from "../common/SectionTitle";
import {FlexWrapper} from "../common/FlexWrapper";

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
                <Button type={"submit"}>View Packages</Button>
            </StyledPackage>
        </FlexWrapper>
    );
};

const StyledPackage = styled.div`
    max-width: 583px;
    max-height: 380px;
    background-color: rgba(234,255,158,0.79);
`

const PackageText = styled.p`
`



