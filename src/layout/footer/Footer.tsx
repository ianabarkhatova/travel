import React, {ElementRef, useRef} from 'react';
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {NavItemList} from "./footer-nav-bar/NavItemList";
import {FooterSectionTitle} from "./footer-section-title/FooterSectionTitle";
import {Button} from "../../components/common/Button";
import {Container} from "../../components/common/Container";
import {S} from './Footer_Styles';
import emailjs from '@emailjs/browser';

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

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_q41tliw', 'template_pgc4pmm', form.current, {
                publicKey: 'zwEIC6iuTTwb9LZuJ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.Footer>
            <Container>
                <S.ContentWrapper>
                    <S.GroupOne>
                        <Logo fill={"#000000"}/>
                        <S.FooterText>
                            Travel helps companies manage payments easily.
                        </S.FooterText>
                        <S.SocialList>
                            {SocialItemData.map((s, index) => {
                                return (
                                    <S.SocialItem key={index}>
                                        <S.SocialLink>
                                            <Icon
                                                iconId={s.iconId}
                                                width={"22"}
                                                height={"22"}
                                                viewBox={"0 0 22 22"}/>
                                        </S.SocialLink>
                                    </S.SocialItem>
                                )
                            })}
                        </S.SocialList>
                    </S.GroupOne>

                    <S.FooterNavBar>
                        <FooterSectionTitle>Company</FooterSectionTitle>
                        <NavItemList NavItems={FooterNavBarDataOne}></NavItemList>
                    </S.FooterNavBar>

                    <S.FooterNavBar>
                        <FooterSectionTitle>Destinations</FooterSectionTitle>
                        <NavItemList NavItems={FooterNavBarDataTwo}></NavItemList>
                    </S.FooterNavBar>

                    <S.NewsLetter>
                        <FooterSectionTitle>
                            Join Our Newsletter
                        </FooterSectionTitle>

                        <S.Form ref={form} onSubmit={sendEmail}>
                            <S.Field required placeholder={"Your email address"} name={'email'}></S.Field>
                            <Button smaller type={"submit"}>Subscribe</Button>
                        </S.Form>

                        <S.NewsText>* Will send you weekly updates for your better
                            tour packages.</S.NewsText>
                    </S.NewsLetter>
                </S.ContentWrapper>

                <S.Copyright>Copyright @Xpro 2024. All Rights Reserved.</S.Copyright>
            </Container>
        </S.Footer>
    );
};



