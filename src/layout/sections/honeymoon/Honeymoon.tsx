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
import {Container} from "../../../components/common/Container";

const honeymoonData = [
    {
        description: "Honeymoon Specials",
        title: "Our Romantic Tropical Destinations",
        text: "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo      eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!",
    },
]

const imagesData = [
    {
        src: romantic1,
        alt: "couple hugging",
        style: {width: "141px", height: "141px", top: "220px", left: "48px", zIndex: "1"},
    },

    {
        src: romantic2,
        alt: "couple at sunset",
        style: {width:"190px", height:"190px", top: "0", left: "40px", zIndex: "1"},
    },

    {
        src: romantic3,
        alt: "ellipse",
        style: {width:"74px", height:"74px", top: "-24px", left: "240px", zIndex: "1"},
    }
]

export const Honeymoon = () => {
    return (
        <StyledHoneymoon>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <StyledImages>
                        {imagesData.map((i, index) => {
                            return(
                                <Image src={i.src}
                                       alt={i.alt}
                                       style={i.style}
                                       key={index}
                                />
                            )
                        })}

                        <IllustrationWrapper>
                            <Illustration imgSource={romantic4}
                                          imgAlt={"couple hugging in front of the sea"}
                                          text={"Honeymoon Packages"}
                                          styleImage={{right: 0}}
                                          styleText={{left: 0}}
                            />
                        </IllustrationWrapper>
                    </StyledImages>

                    {honeymoonData.map((h,index) => {
                        return <Package
                            description={h.description} key={index}
                            title={h.title}
                            text={h.text}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </StyledHoneymoon>

    );
}

const StyledHoneymoon = styled.section`
`

const StyledImages = styled.div`
    width: 655px;
    height: 745px;
    position: relative;
    z-index: 0;
    padding: 2px;
    
    > * {
        position: absolute;
    }
`

const IllustrationWrapper = styled.div`
    position: relative;

    //&::before {
    //    content: "";
    //    display: inline-block;
    //    width: 476px;
    //    height: 710px;
    //    background: linear-gradient(45deg, #A7327AFF 100%, #3B90FBFF 100%);
    //    border: 2px solid transparent;
    //    border-radius: 376px 376px 0 0;
    //    border-bottom: transparent;
    //
    //    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    //    -webkit-mask-composite: xor;
    //    mask-composite: exclude; 
    //
    //    position: absolute;
    //    top: 0;
    //    right: 82px;
    //    bottom: 0;
    //    z-index: -1; 
    //}
`





