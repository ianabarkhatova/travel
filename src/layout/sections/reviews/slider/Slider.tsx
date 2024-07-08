import React from 'react';
import photo from "../../../../assets/images/reviews/reviews-2.webp"
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";
import {S} from './Slider_Styles'

export const Slider = () => {
    return (
        <S.Slider>
            <S.Slide>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                    <S.Photo src={photo} height={"150px"} width={"150px"}/>

                    <S.MainContent>
                        <S.Icon>
                            <Icon iconId={"commas"}/>
                        </S.Icon>

                        <S.ContentWrapper>
                            <S.Text>
                                Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae
                                molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit
                                vel doloremque obcaecati qui ullam consectetur et ipsum omnis.
                            </S.Text>
                            <S.Name>
                                Christine Beckam - Designer
                            </S.Name>
                        </S.ContentWrapper>
                    </S.MainContent>

                    <S.Pagination>
                        <span></span>
                        <span className={"active"}></span>
                        <span></span>
                    </S.Pagination>
                </FlexWrapper>

            </S.Slide>
        </S.Slider>
    );
};

