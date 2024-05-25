import React from 'react';
import romantic1 from "../../../assets/images/romantic/romantic-1.webp"
import romantic2 from "../../../assets/images/romantic/romantic-2.webp"
import romantic3 from "../../../assets/images/romantic/romantic-3.webp"
import romantic4 from "../../../assets/images/romantic/romantic-4.png"
import styled from "styled-components";
import {Package} from "../../../components/package/Package";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Image} from "../../../components/image/Image";
import {Illustration} from "../../../components/illustration/Illustration";

const honeymoonData = [
    {
        description: "Honeymoon Specials",
        title: "Our Romantic Tropical Destinations",
        text: "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo      eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!",
    },
]

export const Honeymoon = () => {
    return (
        <StyledHoneymoon>
            <FlexWrapper justify={"space-around"}>
                <StyledIllustration>
                    <Image src={romantic1} alt={"couple hugging"}
                           style={{width: "141px", height: "141px", top: "248px", zIndex: "1"}}/>
                    <Image src={romantic2} alt={"couple at sunset"}
                           style={{width:"230px", height:"230px", top: "0", left: "67px", zIndex: "1"}}/>
                    <Image src={romantic3} alt={"ellipse"}
                           style={{width:"74px", height:"74px", top: "16px", left: "310px", zIndex: "1"}}/>
                    <Illustration imgSource={romantic4}
                                  imgAlt={"couple hugging in front of the sea"}
                                  text={"Honeymoon Packages"}
                                  styleImage={{right: 0}}
                                  styleText={{left: 0}}
                    />
                </StyledIllustration>

                    {honeymoonData.map((h,index) => {
                        return <Package
                            description={h.description} key={index}
                            title={h.title}
                            text={h.text}
                        />
                    })}
            </FlexWrapper>

        </StyledHoneymoon>

    );
}

const StyledHoneymoon = styled.section`
    background-color: rgba(98,202,255,0.79);
    max-height: 100vh;
`

const StyledIllustration = styled.div`
    width: 655px;
    height: 745px;
    position: relative;
    z-index: 0;
    
    > * {
        position: absolute;
    }
`






