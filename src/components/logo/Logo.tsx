import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './Logo_Styles';
import {animateScroll as scroll} from "react-scroll";


type LogoPropsType = {
    fill?: string
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <S.Link onClick={()=> {scroll.scrollToTop()}}>
            <Icon iconId={'logo'} width={"100"} height={"41"} viewBox={"0 0 100 41"} fill={props.fill}/>
            <S.Icon>
                <Icon iconId={"arrow"} width={"96px"} height={"26px"} viewBox={"0 0 96 32"}/>
            </S.Icon>

        </S.Link>
    );
};
