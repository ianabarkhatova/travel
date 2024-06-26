import React from 'react';
import {S} from "./DropdownHover_Styles"

export const DropdownHover = (props: {dropdownHoverItems: Array<string>}) => {
    return (
        <S.DropdownHover>
            <S.Link href="#">Services</S.Link>
            <ul>
                {props.dropdownHoverItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <S.DropdownLink href="#">{item}</S.DropdownLink>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.DropdownHover>
    );
};

