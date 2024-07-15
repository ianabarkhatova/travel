import React from 'react';
import {Package} from "../../../components/package/Package";
import {Container} from "../../../components/common/Container";
import {S} from './Honeymoon_Styles'

const honeymoonData = [
    {
        description: "Honeymoon Specials",
        title: "Our Romantic Tropical Destinations",
        text: "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo      eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!",
    },
]

export const Honeymoon = () => {
    return (
        <S.Honeymoon id={"honeymoon-packages"}>
            <Container>
                <S.ContentWrapper>
                    {honeymoonData.map((h,index) => {
                        return <Package
                            description={h.description} key={index}
                            title={h.title}
                            text={h.text}
                        />
                    })}
                </S.ContentWrapper>
            </Container>
        </S.Honeymoon>
    );
}





