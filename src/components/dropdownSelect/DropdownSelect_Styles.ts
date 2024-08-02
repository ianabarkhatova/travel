import {CSSObjectWithLabel} from "react-select";
import {theme} from "../../styles/Theme";

export const dropdownSelectStyles = {
    control: (provided: CSSObjectWithLabel, state: any) => ({
        ...provided,
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        cursor: 'pointer',
    }),

    option: (provided: CSSObjectWithLabel, state: any) => ({
        ...provided,
        backgroundColor: state.isFocused
                ? theme.colors.accent // цвет фона при наведении
                : 'transparent',
        color: theme.colors.lightFont,
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: 15,
        cursor: 'pointer',
        border: 'none',

    }),

    singleValue: (provided: CSSObjectWithLabel) => ({
        ...provided,
        color: theme.colors.lightFont,
        margin: 0,
    }),

    dropdownIndicator: (provided: CSSObjectWithLabel, state: any) => ({
        ...provided,
        color: theme.colors.lightFont,
    }),

    indicatorSeparator: () => ({
        display: 'none',
    }),

    menu: (provided: CSSObjectWithLabel) => ({
        ...provided,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        backdropFilter: 'blur(100px)',
        borderRadius: '5px',
        border: 'none',
        width: '230px'
    }),

    menuList: (provided: CSSObjectWithLabel) => ({
        ...provided,
        backgroundColor: 'transparent',
        borderRadius: '5px',
        border: 'none',
    }),

    input: (provided: CSSObjectWithLabel) => ({
        ...provided,
        color: 'transparent',
    }),

    placeholder: (provided: CSSObjectWithLabel) => ({
        ...provided,
        color: theme.colors.lightFont,
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: 20,
    }),

    valueContainer: (provided: CSSObjectWithLabel) => ({
        ...provided,
        padding: 0,
    }),
};