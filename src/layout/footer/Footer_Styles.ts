import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
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

const FooterText = styled.span`
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

const GroupOne = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 212px;
    max-height: 180px;
`

const FooterNavBar = styled.div`
`

const NewsLetter = styled.div`
    max-width: 390px;
`

const Form = styled.form`
    width: 100%;
    max-height: 52px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`

const Field = styled.input`
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

const NewsText = styled.span`
    ${font({
    weight: 500,
    Fmax: 16,
    Fmin: 12,
    family: '"Manrope", sans-serif',
    color: "#757095",
})}
`

export const S = {
    Footer,
    ContentWrapper,
    FooterText,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright,
    GroupOne,
    FooterNavBar,
    NewsLetter,
    Form,
    Field,
    NewsText
}

