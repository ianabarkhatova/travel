import React from 'react';
import {Button} from "../common/Button";
import styled from "styled-components";
import {SectionDescription} from "../common/SectionDescription";
import {SectionTitle} from "../common/SectionTitle";
import {FlexWrapper} from "../common/FlexWrapper";

export const Package = () => {
    return (
        <FlexWrapper>
            <StyledPackage>
                <SectionDescription>Honeymoon Specials</SectionDescription>
                <SectionTitle>Our Romantic Tropical Destinations</SectionTitle>
                <PackageText>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</PackageText>
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



