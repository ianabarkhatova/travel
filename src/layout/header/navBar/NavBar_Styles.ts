import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

//NavBar

const NavLink = styled(Link)`
    color: ${theme.colors.lightFont};
    font-family: "Figtree", sans-serif;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;

    &:hover, &.active {
        &::before {
            height: 3px;
            content: "";
            display: inline-block;

            background-color: ${theme.colors.accent};
            border-radius: 34px;

            position: absolute;
            bottom: -2px;
            left: 8px;
            right: 8px;

            @media ${theme.media.small} {
                display: none;
            }
        }
    }
}
`

const ListItem = styled.li`
    position: relative;
`

// NavBarDesktop

const NavBarDesktop = styled.nav`
    max-width: 485px;
    width: 100%;
    
    ul {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        width: 100%;
    }
    
    ${ListItem} {
        white-space: nowrap;
    }
`

//NavBarMobile

const NavBarMobile = styled.nav`

    @media ${theme.media.small} {
        margin: 0 calc(2% + 20px); 
    }
    
    ul {
        display: flex;
        gap: calc(2vw + 30px);
        flex-direction: column;
        align-items: center;

        @media ${theme.media.medium} {
            gap: calc(1vw + 10px);
        }
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -78px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;
}

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

//DropdownHover

const DropdownHover = styled.li`
    position: relative;
    
    ul {
        display: none;
        position: absolute;
        top: 100%; 
        left: -16px;

        align-items: flex-start;
        flex-direction: column;
        padding: 15px 16px;
        gap: 10px;
        min-width: 228px;

        background: rgba(217, 217, 217, 0.34);
        border-radius: 16px;
        backdrop-filter: blur(100px);
    }

    &:hover ul {
        display: flex;

        @media ${theme.media.small} {
            display: none;
        }
    }
`

const DropdownLink = styled(Link)`
    color: ${theme.colors.lightFont};
    font-family: "Figtree", sans-serif;
    font-weight: 500;
    font-size: 16px;

    &:hover {
        &::before {
            height: 3px;
        }
    }

    &::before {
        content: "";
        display: inline-block;

        background-color: ${theme.colors.accent};
        border-radius: 34px;

        position: absolute;
        bottom: -4px;
        left: 8px;
        right: 8px;
`

const DropdownMenuLink = styled.a`
    color: ${theme.colors.lightFont};
    font-family: "Figtree", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;

    position: relative;

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
        bottom: -3px;
        left: 8px;
        right: 8px;
`



export const S = {
    NavBarDesktop,
    NavBarMobile,
    BurgerButton,
    UlPopUp,
    NavLink,
    ListItem,
    DropdownHover,
    DropdownLink,
    DropdownMenuLink,
}

