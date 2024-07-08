import React from 'react';
import {Package} from "../../../components/package/Package";
import image1 from "../../../assets/images/promotion/europe-1.webp"
import image2 from "../../../assets/images/promotion/europe-2.webp"
import image3 from "../../../assets/images/promotion/europe-3.webp"
import image4 from "../../../assets/images/promotion/europe-4.webp"
import {Container} from "../../../components/common/Container";
import {PromotionCard} from "./promotionCard/PromotionCard";
import {S} from './Promotion_Styles'


const promotionData = [
    {
        description: "Promotion",
        title: "We Provide You Best Europe Sightseeing Tours",
        text: "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo      eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!",
    }
]

const PromotionCardData = [
    {
        imgSource: image1,
        imgAlt: "big ben",
        price: "$700"
    },
    {
        imgSource: image2,
        imgAlt: "city view at sunset",
        price: "$800"
    },
    {
        imgSource: image3,
        imgAlt: "colosseum",
        price: "$500"
    },
    {
        imgSource: image4,
        imgAlt: "cathedral",
        price: "$400"
    }
]

export const Promotion = () => {
    return (
        <S.Promotion>
            <Container>
                <S.ContentWrapper>
                    <S.PromotionWrapper>
                        {promotionData.map((p,index) => {
                            return <Package
                                description={p.description} key={index}
                                title={p.title}
                                text={p.text}
                            />
                        })}

                        <S.PromotionCardWrapper>
                            {PromotionCardData.map((p, index) => {
                                return <PromotionCard imgSource={p.imgSource} key={index}
                                                      imgAlt={p.imgAlt}
                                                      price={p.price}/>
                            })}
                        </S.PromotionCardWrapper>
                    </S.PromotionWrapper>

                </S.ContentWrapper>
            </Container>

        </S.Promotion>
    );
};



