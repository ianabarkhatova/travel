import React from 'react';
import styled from "styled-components";
import photo from "../../../../assets/images/reviews/reviews-2.webp"
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                    <Photo src={photo} height={"120px"} width={"120px"}/>

                    <MainContent>
                        <StyledIcon>
                            <Icon iconId={"commas"}/>
                        </StyledIcon>

                        <Text>
                            Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae
                            molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit
                            vel doloremque obcaecati qui ullam consectetur et ipsum omnis.
                        </Text>
                        <Name>
                            Christine Beckam - Designer
                        </Name>
                    </MainContent>
                </FlexWrapper>
                <Pagination>
                    <span></span>
                    <span></span>
                    <span></span>
                </Pagination>
            </Slide>


        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    min-width: 538px;
    min-height: 338px;
`

const Slide = styled.div`
    min-height: 338px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Photo = styled.img`
    position: absolute;
    top: 0;
    z-index: 1;
`

const Text = styled.p`
    
`

const Name = styled.span`
`

const MainContent = styled.div`
    background-color: lightpink;
    
    min-height: 278px;
    min-width: 538px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
`

const StyledIcon = styled.div`
    position: absolute;
    top: 18%;
    left: 7%;
`

const Pagination = styled.div`
    position: absolute;
    bottom: 0;
    
    span {
        display: inline-block;
        width: 30px;
        height: 10px;
        margin: 5px;
        background-color: blueviolet;
    }
`
