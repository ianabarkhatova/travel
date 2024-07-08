import React from 'react';
import {Button} from "../common/Button";
import {SectionDescription} from "../common/SectionDescription";
import {SectionTitle} from "../common/SectionTitle";
import {FlexWrapper} from "../common/FlexWrapper";
import {S} from './Package_Styles'


type PackagePropsType = {
    description: string
    title: string
    text: string
}

export const Package = (props: PackagePropsType) => {
    return (
        <FlexWrapper>
            <S.Package>
                <SectionDescription align={"left"}>{props.description}</SectionDescription>
                <SectionTitle align={"left"}>{props.title}</SectionTitle>
                <S.PackageText>{props.text}</S.PackageText>
                <Button type={"submit"} big>View Packages</Button>
            </S.Package>
        </FlexWrapper>
    );
};



