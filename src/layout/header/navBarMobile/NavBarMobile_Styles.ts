import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

const NavBarMobile = styled.nav`

    @media ${theme.media.small} {
        margin: 0 calc(2% + 20px); 
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -78px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.lightFont};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.lightFont};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.lightFont};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

const Ul = styled.ul`
    display: flex;
    gap: calc(2vw + 30px);
    flex-direction: column;
    align-items: center;

    @media ${theme.media.medium} {
        gap: calc(1vw + 10px);
    }
`

const UlPopUp = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(243, 243, 243, 0.6);
    backdrop-filter: blur(14px);
    
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`


const ListItem = styled.li`
    position: relative;
`

const Link = styled.a`
    color: ${theme.colors.lightFont};
    font-family: "Figtree", sans-serif;
    font-weight: 500;
    font-size: 16px;

    &:hover {
        &::before {
            height: 3px;

            @media ${theme.media.small} {
                display: none;
            }
        }
    }
    
    &::before {
        content: "";
        display: inline-block; 
        
        background-color: ${theme.colors.accent};
        border-radius: 34px;
       
        position: absolute;
        bottom: 0;
        left: 8px;
        right: 8px;
    }
`

export const S = {
    NavBarMobile,
    BurgerButton,
    Ul,
    UlPopUp,
    ListItem,
    Link
}