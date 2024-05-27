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

                <Illustration
                    imgSource={image5}
                    imgAlt={"Eiffel tower"}
                    text={"Breathtaking Views"}
                    styleImage={{left: 0}}
                    styleText={{right: 0}}
                    styleIllustration={{right: 292}}
                />
        </StyledPromotion>
    );
};

const StyledPromotion = styled.section`
    min-height: 751px;
    background-color: rgba(255,206,92,0.79);
    min-width: 1482px;
    
    display: flex;
    flex-direction: row;
`

const PromotionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    max-width: 380px;
    
    position: relative;
    z-index: 1;
`


const PromotionCardWrapper = styled.div`
    background-color: lightpink;
    display: flex;
    gap: 56px;
`

