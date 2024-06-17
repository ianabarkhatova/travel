import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {NavItemList} from "./footer-nav-bar/NavItemList";
import {FooterSectionTitle} from "./footer-section-title/FooterSectionTitle";
import {Button} from "../../components/common/Button";
import {FlexWrapper} from "../../components/common/FlexWrapper";
import {Container} from "../../components/common/Container";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

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

const FooterNavBarDataOne = ["About Us", "Careers", "Blog", "Pricing"]

const FooterNavBarDataTwo = ["Maldives", "Los Angeles", "Las Vegas", "Toronto"]


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <ContentWrapper>
                    <StyledGroupOne>
                        <Logo fill={"#000000"}/>
                        <StyledFooterText>
                            Travel helps companies manage payments easily.
                        </StyledFooterText>
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
                        <NavItemList NavItems={FooterNavBarDataOne}></NavItemList>
                    </StyledFooterNavBar>

                    <StyledFooterNavBar>
                        <FooterSectionTitle>Destinations</FooterSectionTitle>
                        <NavItemList NavItems={FooterNavBarDataTwo}></NavItemList>
                    </StyledFooterNavBar>

                    <StyledNewsLetter>
                        <FooterSectionTitle>
                            Join Our Newsletter
                        </FooterSectionTitle>

                        <StyledForm>
                            <StyledField placeholder={"Your email address"}></StyledField>
                            <Button smaller type={"submit"}>Subscribe</Button>
                        </StyledForm>

                        <StyledNewsText>* Will send you weekly updates for your better
                            tour packages.</StyledNewsText>
                    </StyledNewsLetter>
                </ContentWrapper>

                <Copyright>Copyright @Xpro 2024. All Rights Reserved.</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 115px 0 40px;
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;

    @media ${theme.media.medium} {
        //justify-content: space-around;
    }
`

const StyledFooterText = styled.span`
    padding: 10px 0 30px;

    ${font({
        weight: 500,
        Fmax: 16,
        Fmin: 12,
        family: '"Manrope", sans-serif',
        color: "#757095",
    })}
`

const SocialList = styled.ul`
    display: flex;
    list-style: none;
    gap: 14px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
`

const Copyright = styled.small`
    display: flex;
    justify-content: center;
    padding-top: 100px;

    ${font({
        weight: 500,
        Fmax: 14,
        Fmin: 12,
        family: '"Manrope", sans-serif',
        color: theme.colors.darkFooterFont,
    })}
    
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.secondaryBg};
        
        position: absolute;
        top: 45%;
    }
    
`

const StyledGroupOne = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 212px;
    max-height: 180px;
`

const StyledFooterNavBar = styled.div`
`

const StyledNewsLetter = styled.div`
    max-width: 390px;
`

const StyledForm = styled.form`
    width: 100%;
    max-height: 52px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`

const StyledField = styled.input`
    max-width: 242px;
    width: 100%;
    height: 100%;
    background-color: #EEEEFF;
    border: none;
    padding: 14px 0 14px 15px;

    ${font({
        weight: 500,
        Fmax: 16,
        Fmin: 12,
        family: '"Manrope", sans-serif',
        color: theme.colors.darkFooterFont,
    })}
`

const StyledNewsText = styled.span`
    ${font({
        weight: 500,
        Fmax: 16,
        Fmin: 12,
        family: '"Manrope", sans-serif',
        color: "#757095",
    })}
`



