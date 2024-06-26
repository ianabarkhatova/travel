import React from 'react';
import styled from "styled-components";
import {Package} from "../../../components/package/Package";
import {PromotionCard} from "./promotionCard/PromotionCard";
import image1 from "../../../assets/images/promotion/europe-1.webp"
import image2 from "../../../assets/images/promotion/europe-2.webp"
import image3 from "../../../assets/images/promotion/europe-3.webp"
import image4 from "../../../assets/images/promotion/europe-4.webp"
import image5 from "../../../assets/images/promotion/europe-5.webp"
import {Illustration} from "../../../components/illustration/Illustration";
import {Container} from "../../../components/common/Container";
import {theme} from "../../../styles/Theme";


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

                    <IllustrationWrapper>
                        <Illustration
                            imgSource={image5}
                            imgAlt={"Eiffel tower"}
                            text={"Breathtaking Views"}
                            styleText={{right: 0}}
                            styleIllustration={{left: 0}}
                        />
                    </IllustrationWrapper>
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

const IllustrationWrapper = styled.div`
    position: absolute;
    max-width: 552px;
    width: 100%;
    min-height: 690px;
    bottom: 0;
    right: 0;

    & > * {
        @media ${theme.media.large} {
            display: none;
        }
    }
`

const PromotionCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 56px;

    @media ${theme.media.medium} {
        justify-content: center;
        align-items: center;
        max-width: 500px;
        gap: 70px;
    }
`

