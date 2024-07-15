import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {NavBarDesktop} from "./navBarDesktop/NavBarDesktop";
import {Button} from "../../components/common/Button";
import {Container} from "../../components/common/Container";
import {NavBarMobile} from "./navBarMobile/NavBarMobile";
import {S} from "./Header_Styles"

export type navBarItemPropsType = {
    title: string,
    href: string
}

export const navBarItems = [
    {
        title: "Home",
        href: "home"
    },

    {
        title: "About",
        href: "about"
    },

    {
        title: "Upcoming Packages",
        href: "upcoming-packages"
    }
]

export const Header = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <S.ContentWrapper>
                    <Logo/>
                    {width < breakpoint ? <NavBarMobile navBarItems={navBarItems}/>
                        : <NavBarDesktop navBarItems={navBarItems}/>}

                    {width > breakpoint ? <Button type={"submit"} small>Get in Touch</Button> : null}
                </S.ContentWrapper>
            </Container>
        </S.Header>
    );
};

