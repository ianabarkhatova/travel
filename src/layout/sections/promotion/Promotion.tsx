import React from 'react';
import styled from "styled-components";
import {Package} from "../../../components/package/Package";
import image1 from "../../../assets/images/promotion/europe-1.webp"
import image2 from "../../../assets/images/promotion/europe-2.webp"
import image3 from "../../../assets/images/promotion/europe-3.webp"
import image4 from "../../../assets/images/promotion/europe-4.webp"
import {Container} from "../../../components/common/Container";
import {theme} from "../../../styles/Theme";
import {PromotionCard} from "./promotionCard/PromotionCard";


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
        <StyledPromotion>
            <Container>
                <ContentWrapper>
                    <PromotionWrapper>
                        {promotionData.map((p,index) => {
                            return <Package
                                description={p.description} key={index}
                                title={p.title}
                                text={p.text}
                            />
                        })}

                        <PromotionCardWrapper>
                            {PromotionCardData.map((p, index) => {
                                return <PromotionCard imgSource={p.imgSource} key={index}
                                                      imgAlt={p.imgAlt}
                                                      price={p.price}/>
                            })}
                        </PromotionCardWrapper>
                    </PromotionWrapper>

                </ContentWrapper>
            </Container>

        </StyledPromotion>
    );
};

const StyledPromotion = styled.section`
    min-height: 790px;
    height: 100%;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
`

const PromotionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    min-height: 790px;
    position: relative;
    
    @media ${theme.media.large} {
        justify-content: center;
        align-items: center;
    }
`

const PromotionCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 56px;

    @media ${theme.media.large} {
        justify-content: center;
        align-items: center;
        max-width: 600px;
    }
`

