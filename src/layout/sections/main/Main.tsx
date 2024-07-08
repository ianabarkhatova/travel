import React from 'react';
import {Button} from "../../../components/common/Button";
import face1 from "../../../assets/images/search/face-1.png";
import face2 from "../../../assets/images/search/face-2.png";
import face3 from "../../../assets/images/search/face-3.png";
import face4 from "../../../assets/images/search/face-4.png";
import face5 from "../../../assets/images/search/face-5.png";
import face6 from "../../../assets/images/search/face-6.png";
import {DropdownSelect} from "../../../components/dropdownSelect/DropdownSelect";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Container} from "../../../components/common/Container";
import {S} from './Main_Styles';


const dropdownTravelItems = ["Travel Type", "Family", "Single", "Friends"]

const dropdownDurationItems = ["Duration", "3 days", "5 days", "7 days"]

const dropdownImagesData = [
    {
        image : face1,
        alt: "young man's portrait"
    },
    {
        image: face2,
        alt: "young woman's portrait"
    },
    {
        image: face3,
        alt: "man's portrait"
    },
    {
        image: face4,
        alt: "man's side photo"
    },
    {
        image: face5,
        alt: "young man's photo"
    },
    {
        image: face6,
        alt: "young man's photo"
    }
]


export const Main = () => {
    return (
        <S.Main>
            <Container>
                <S.MainContent>
                    <FlexWrapper direction={"column"} justify={"space-around"}>
                        <S.MainTitle>
                            No matter where you’re going to, we’ll take you there
                        </S.MainTitle>

                        <S.Form>
                            <S.Fields>
                                <S.FieldWrapper>
                                    <S.Field placeholder={"Where to?"}/>
                                </S.FieldWrapper>

                                <DropdownSelect dropdownItems={dropdownTravelItems}/>
                                <DropdownSelect dropdownItems={dropdownDurationItems}/>
                            </S.Fields>

                            <Button big type={"submit"}>Submit</Button>
                        </S.Form>

                        <S.Reviews>
                            <S.Images>
                                {dropdownImagesData.map((d,index) => {
                                    return(
                                        <S.ImageIcon key={index}
                                                         src={d.image}
                                                         alt={d.alt}/>
                                    )
                                })}

                            </S.Images>

                            <S.MainText>
                                2,500 people booked Tommorowland Event in last 24 hours
                            </S.MainText>

                        </S.Reviews>
                    </FlexWrapper>
                </S.MainContent>
            </Container>
        </S.Main>
    );
};

