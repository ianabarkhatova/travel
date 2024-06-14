import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {NavItemList} from "./footer-nav-bar/NavItemList";
import {FooterSectionTitle} from "./footer-section-title/FooterSectionTitle";
import {Button} from "../../components/common/Button";
import {FlexWrapper} from "../../components/common/FlexWrapper";
import {Container} from "../../components/common/Container";

const SocialItemData = [
    {
        iconId: "linkedin"
    },
    {
        iconId: "messenger"
    },
    {
        iconId: "x"
    },
    {
        iconId: "twoo"
    }
]

const FooterNavBarDataOne = [
    {
        itemName: "About Us"
    },

    {
        itemName: "Careers"
    },

    {
        itemName: "Blog"
    },

    {
        itemName: "Pricing"
    }
]

const FooterNavBarDataTwo = [
    {
        itemName: "Maldives"
    },

    {
        itemName: "Los Angeles"
    },

    {
        itemName: "Las Vegas"
    },

    {
        itemName: "Toronto"
    }
]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-around"}>
                    <StyledGroupOne>
                        <FlexWrapper direction={"column"}>
                            <Logo/>
                            <StyledFooterText>
                                Travel helps companies manage payments easily.
                            </StyledFooterText>
                        </FlexWrapper>
                        <SocialList>
                            {SocialItemData.map((s, index) => {
                                return (
                                    <SocialItem key={index}>
                                        <SocialLink>
                                            <Icon
                                                iconId={s.iconId}
                                                width={"22"}
                                                height={"22"}
                                                viewBox={"0 0 22 22"}/>
                                        </SocialLink>
                                    </SocialItem>
                                )
                            })}
                        </SocialList>
                    </StyledGroupOne>

                    <StyledFooterNavBar>
                        <FooterSectionTitle>Company</FooterSectionTitle>
                        {FooterNavBarDataOne.map((f, index) => {
                            return (
                                <NavItemList itemName={f.itemName}/>
                            )
                        })}
                    </StyledFooterNavBar>

                    <StyledFooterNavBar>
                        <FooterSectionTitle>Destinations</FooterSectionTitle>
                        {FooterNavBarDataTwo.map((f, ) => {
                            return (
                                <NavItemList itemName={f.itemName}/>
                            )
                        })}
                    </StyledFooterNavBar>

                    <StyledNewsLetter>
                        <FooterSectionTitle>
                            Join Our Newsletter
                        </FooterSectionTitle>

                        <StyledForm>
                            <StyledField placeholder={"Your email address"}></StyledField>
                            <Button type={"submit"}>Submit</Button>
                        </StyledForm>

                        <StyledNewsText>* Will send you weekly updates for your better
                            tour packages.</StyledNewsText>
                    </StyledNewsLetter>
                </FlexWrapper>


                <Copyright>Copyright @Xpro 2024. All Rights Reserved.</Copyright>
            </Container>


        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 484px;
    background-color: rgba(184,255,154,0.79);
`

const StyledFooterText = styled.span`
`

const SocialList = styled.ul`
    display: flex;
    list-style: none;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
`

const Copyright = styled.small`
    display: flex;
    justify-content: center;
`

const StyledGroupOne = styled.div`
    max-width: 212px;
    max-height: 180px;
    background-color: rgba(224,177,255,0.79);
`

const StyledFooterNavBar = styled.div`
`

const StyledNewsLetter = styled.div`
    max-width: 388px;
    background-color: rgba(255,218,44,0.79);
`

const StyledForm = styled.form`
    max-width: 388px;
    max-height: 52px;
    background-color: rgba(255,123,118,0.79);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledField = styled.input`

`

const StyledNewsText = styled.span`
`



