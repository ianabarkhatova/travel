import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles'
import {FlexWrapper} from "../../../../components/common/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import photo from "../../../../assets/images/reviews/reviews-2.webp";
import './../../../../styles/slider.css'

type SlidePropsType = {
    photo: string
    text: string
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <S.Photo src={props.photo}/>

                <S.MainContent>
                    <S.Icon>
                        <Icon iconId={"commas"}/>
                    </S.Icon>

                    <S.ContentWrapper>
                        <S.Text>{props.text}</S.Text>
                        <S.Name>{props.userName}</S.Name>
                    </S.ContentWrapper>
                </S.MainContent>
            </FlexWrapper>
        </S.Slide>
    )
}

const items = [
    <Slide
        text={"Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandaemolestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impeditvel doloremque obcaecati qui ullam consectetur et ipsum omnis."}
        userName={"Christine Beckam - Designer"}
        photo={photo}
    />,
    <Slide
        text={"Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandaemolestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impeditvel doloremque obcaecati qui ullam consectetur et ipsum omnis."}
        userName={"Kate Rowland - Architect"}
        photo={photo}/>,
    <Slide
        text={"Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandaemolestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impeditvel doloremque obcaecati qui ullam consectetur et ipsum omnis."}
        userName={"Julia Ivanova - Analyst"}
        photo={photo}/>
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);


