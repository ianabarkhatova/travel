import React from 'react';
import {S} from './DropdownSelect_Styles'


export const DropdownSelect = (props: {dropdownItems: Array<string>}) => {
    return (
        <S.SelectContainer>
            <S.DropdownSelect>
                {props.dropdownItems.map((item, index) => {
                    return <S.Option key={index}
                                   value="">{item}
                    </S.Option>
                })}
            </S.DropdownSelect>
        </S.SelectContainer>
    );
};


