import React from 'react';
import {S} from './NavItemList_Styles'


export const NavItemList = (props: {NavItems: Array<string>}) => {
    return (
        <S.NavItems>
            <S.NavItemsList>
                {props.NavItems.map((i, index) => {
                    return <S.NavItem>
                        <S.NavItemLink href=""
                                     key={index}>{i}
                        </S.NavItemLink>
                    </S.NavItem>
                })}
            </S.NavItemsList>
        </S.NavItems>
    );
};



