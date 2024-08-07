import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const NavItems = styled.nav`
    display: flex;
    flex-direction: column;
`

const NavItemsList = styled.ul`
    list-style: none;
`

const NavItem = styled.li`
    &:not(:first-child) {
        padding-top: 18px;
    }
`

const NavItemLink = styled.a`
    ${font({
    weight: 500,
    Fmax: 16,
    Fmin: 12,
    family: '"Manrope", sans-serif',
    color: theme.colors.darkFooterFont,
})}
`

export const S = {
    NavItems,
    NavItemsList,
    NavItem,
    NavItemLink
}

